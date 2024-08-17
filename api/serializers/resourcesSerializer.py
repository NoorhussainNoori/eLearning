from rest_framework.serializers import ModelSerializer
from ..models.resources import Resources

class ResourcesSerializer(ModelSerializer):
    class Meta:
        model = Resources
        fields = '__all__'