from rest_framework.viewsets import ModelViewSet
from ..serializers.courseSerializer import CourseSerializer, Course

class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
