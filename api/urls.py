from rest_framework import routers
from .view.CourseViewSet import CourseViewSet
from .view.resourcesViewSet import ResourcesViewSet
from .view.commentViewSet import CommentViewSet
from .view.ProgressViewSet import ProgressViewSet


router = routers.DefaultRouter()
router.register('courses', CourseViewSet)
router.register('resources', ResourcesViewSet)
router.register('comments', CommentViewSet)
router.register('progress', ProgressViewSet)



urlpatterns = router.urls