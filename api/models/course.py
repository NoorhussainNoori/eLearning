from django.db import models
from django.contrib.auth import get_user_model

class Course (models.Model):
    course_title = models.CharField(max_length=70)
    course_description = models.TextField()
    creation_date = models.DateField()
    course_image = models.ImageField(upload_to='media/CourseImages/')
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    
