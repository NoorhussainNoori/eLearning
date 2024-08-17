from django.db import models
from ..models.course import Course
class Resources (models.Model):
    video_url = models.CharField(max_length=300)
    descritption = models.TextField
    attachment = models.FileField(upload_to='media/resources/')
    course = models.ForeignKey(Course, on_delete=models.CASCADE)


