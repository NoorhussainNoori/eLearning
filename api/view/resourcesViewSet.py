from rest_framework.viewsets import ModelViewSet
from ..serializers.resourcesSerializer import Resources, ResourcesSerializer

class ResourcesViewSet(ModelViewSet):
    queryset = Resources.objects.all()
    serializer_class = ResourcesSerializer
