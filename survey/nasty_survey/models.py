from django.db import models

class SurveyResult(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    score = models.IntegerField()
    risk_level = models.CharField(max_length=50)
    high_factors = models.TextField(blank=True)
    moderate_factors = models.TextField(blank=True)
    is_pregnant = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.risk_level}"
