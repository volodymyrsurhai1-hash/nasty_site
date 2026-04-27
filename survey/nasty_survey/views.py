from django.shortcuts import render
from django.http import JsonResponse
from .models import SurveyResult
import json

def survey_view(request):
    return render(request, 'nasty_survey/index.html')

def save_survey(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            SurveyResult.objects.create(
                first_name=data.get('firstName', ''),
                last_name=data.get('lastName', ''),
                score=data.get('score', 0),
                risk_level=data.get('level', ''),
                high_factors=", ".join(data.get('highFactors', [])),
                moderate_factors=", ".join(data.get('moderateFactors', [])),
                is_pregnant=data.get('isPregnant', False)
            )
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)