from django.db import models
from .resources import Resources
from django.contrib.auth import get_user_model

class Progress (models.Model):
    completion_status = models.IntegerField()
    last_accessed = models.DateField()
    resources = models.ForeignKey(Resources, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    