from django.db import models
from django.contrib.auth import get_user_model
from .resources import Resources

class Comment (models.Model):
    comment = models.TextField()
    timestamp = models.DateField()
    resource = models.ForeignKey(Resources, on_delete=models.CASCADE )
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    
