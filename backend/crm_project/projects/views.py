from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Project
from .serializers import ProjectSerializer


# Create your views here.
class ProjectList(APIView):

    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)


class ProjectDetails(APIView):
    def get(self, request, pk):
        project = Project.objects.get(id=pk)
        serializer = ProjectSerializer(project, many=False)
        return Response(serializer.data)


class ProjectCreate(APIView):
    def put(self, request):
        serializer = ProjectSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response('Error with creating new project')


class ProjectUpdate(APIView):
    def patch(self, request, pk):
        project = Project.objects.get(id=pk)
        serializer = ProjectSerializer(instance=project, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


class ProjectDelete(APIView):

    def delete(self, request, pk):
        project = Project.objects.get(id=pk)
        project.delete()
        return Response('Project info deleted')


