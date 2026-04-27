from django.urls import path
from . import views

urlpatterns = [
    path('', views.survey_view, name='survey'),
    path('save/', views.save_survey, name='save_survey'),
]