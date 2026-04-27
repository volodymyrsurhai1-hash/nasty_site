from django.contrib import admin
from django.utils.html import format_html, mark_safe
from .models import SurveyResult


RISK_COLORS = {
    'high': ('#bc3058', '#ffe0ea'),
    'moderate': ('#a46813', '#fff0ce'),
    'low': ('#527a49', '#e1f1dc'),
    'consult': ('#a92457', '#ffd7e6'),
}


@admin.register(SurveyResult)
class SurveyResultAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'risk_badge',
        'score',
        'high_count',
        'moderate_count',
        'pregnant_icon',
        'created_at',
    )
    list_filter = ('risk_level', 'is_pregnant', 'created_at')
    search_fields = ('first_name', 'last_name')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'risk_badge_detail', 'high_factors_display', 'moderate_factors_display')
    date_hierarchy = 'created_at'
    list_per_page = 25
    save_on_top = True

    fieldsets = (
        ('👤 Patient', {
            'fields': ('first_name', 'last_name', 'created_at'),
        }),
        ('📊 Assessment Result', {
            'fields': ('risk_badge_detail', 'score', 'is_pregnant'),
        }),
        ('🔴 High-Risk Factors', {
            'fields': ('high_factors_display',),
            'classes': ('collapse',),
        }),
        ('🟡 Moderate-Risk Factors', {
            'fields': ('moderate_factors_display',),
            'classes': ('collapse',),
        }),
    )

    # --- List columns ---

    @admin.display(description='Patient', ordering='last_name')
    def full_name(self, obj):
        initials = (obj.first_name[:1] + obj.last_name[:1]).upper()
        return format_html(
            '<div style="display:flex;align-items:center;gap:10px;">'
            '<div style="width:36px;height:36px;border-radius:50%;background:#ffd7e6;'
            'border:2px solid #e9568f;display:flex;align-items:center;justify-content:center;'
            'font-weight:900;font-size:0.75rem;color:#a92457;flex-shrink:0;">{}</div>'
            '<div><strong>{} {}</strong></div>'
            '</div>',
            initials, obj.first_name, obj.last_name
        )

    @admin.display(description='Risk Level', ordering='risk_level')
    def risk_badge(self, obj):
        color, bg = RISK_COLORS.get(obj.risk_level, ('#555', '#eee'))
        return format_html(
            '<span style="display:inline-flex;align-items:center;gap:5px;padding:4px 12px;'
            'border-radius:999px;background:{};color:{};border:1px solid {};'
            'font-weight:800;font-size:0.78rem;letter-spacing:0.04em;text-transform:uppercase;">'
            '<span style="width:7px;height:7px;border-radius:50%;background:{};"></span>{}'
            '</span>',
            bg, color, color, color, obj.risk_level
        )

    @admin.display(description='🔴 High', ordering='high_factors')
    def high_count(self, obj):
        count = len([f for f in obj.high_factors.split(',') if f.strip()]) if obj.high_factors else 0
        color = '#bc3058' if count > 0 else '#527a49'
        bg = '#ffe0ea' if count > 0 else '#e1f1dc'
        return format_html(
            '<span style="padding:3px 10px;border-radius:999px;background:{};color:{};'
            'font-weight:700;font-size:0.82rem;">{}</span>',
            bg, color, count
        )

    @admin.display(description='🟡 Moderate', ordering='moderate_factors')
    def moderate_count(self, obj):
        count = len([f for f in obj.moderate_factors.split(',') if f.strip()]) if obj.moderate_factors else 0
        color = '#a46813' if count > 0 else '#527a49'
        bg = '#fff0ce' if count > 0 else '#e1f1dc'
        return format_html(
            '<span style="padding:3px 10px;border-radius:999px;background:{};color:{};'
            'font-weight:700;font-size:0.82rem;">{}</span>',
            bg, color, count
        )

    @admin.display(description='⚠ Pregnant', boolean=False, ordering='is_pregnant')
    def pregnant_icon(self, obj):
        if obj.is_pregnant:
            return format_html('<span style="color:#a92457;font-weight:800;">{}</span>', '⚠ Yes')
        return format_html('<span style="color:#527a49;">{}</span>', 'No')

    # --- Detail fields ---

    @admin.display(description='Risk Level')
    def risk_badge_detail(self, obj):
        color, bg = RISK_COLORS.get(obj.risk_level, ('#555', '#eee'))
        return format_html(
            '<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 18px;'
            'border-radius:999px;background:{};color:{};border:2px solid {};'
            'font-weight:900;font-size:1rem;letter-spacing:0.04em;text-transform:uppercase;">'
            '<span style="width:9px;height:9px;border-radius:50%;background:{};"></span>{}'
            '</span>',
            bg, color, color, color, obj.risk_level.upper()
        )

    @admin.display(description='High-Risk Factors')
    def high_factors_display(self, obj):
        if not obj.high_factors:
            return format_html('<em style="color:#888;">{}</em>', 'None')
        tags = mark_safe(''.join(
            f'<span style="display:inline-block;margin:3px 4px 3px 0;padding:4px 12px;'
            f'border-radius:6px;background:#ffe0ea;color:#bc3058;font-weight:600;font-size:0.85rem;">'
            f'{f.strip()}</span>'
            for f in obj.high_factors.split(',') if f.strip()
        ))
        return format_html('<div style="display:flex;flex-wrap:wrap;">{}</div>', tags)

    @admin.display(description='Moderate-Risk Factors')
    def moderate_factors_display(self, obj):
        if not obj.moderate_factors:
            return format_html('<em style="color:#888;">{}</em>', 'None')
        tags = mark_safe(''.join(
            f'<span style="display:inline-block;margin:3px 4px 3px 0;padding:4px 12px;'
            f'border-radius:6px;background:#fff0ce;color:#a46813;font-weight:600;font-size:0.85rem;">'
            f'{f.strip()}</span>'
            for f in obj.moderate_factors.split(',') if f.strip()
        ))
        return format_html('<div style="display:flex;flex-wrap:wrap;">{}</div>', tags)
