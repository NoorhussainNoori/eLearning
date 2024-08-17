from rest_framework.viewsets import ModelViewSet
from ..serializers.commentSerializer import CommentSerializer, Comment

class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
