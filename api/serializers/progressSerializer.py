from rest_framework.serializers import ModelSerializer
from ..models.progress import Progress

class ProgressSerializer(ModelSerializer):
    class Meta:
        model = Progress
        fields = '__all__'