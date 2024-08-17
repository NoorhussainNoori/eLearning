from django.contrib import admin
from .models.course import Course
from .models.resources import Resources
from .models.comment import Comment



# Register your models here.
admin.site.register(Course)
admin.site.register(Resources)
admin.site.register(Comment)


