from rest_framework.viewsets import ModelViewSet
from ..serializers.progressSerializer import ProgressSerializer, Progress

class ProgressViewSet(ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
