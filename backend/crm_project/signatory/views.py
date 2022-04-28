from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Signatory
from .serializers import SignatorySerializer


# Create your views here.
class SignatoryList(APIView):

    def get(self, request):
        signatories = Signatory.objects.all()
        serializer = SignatorySerializer(signatories, many=True)
        return Response(serializer.data)


class SignatoryDetails(APIView):
    def get(self, request, pk):
        signatory = Signatory.objects.get(id=pk)
        serializer = SignatorySerializer(signatory, many=False)
        return Response(serializer.data)


class SignatoryCreate(APIView):
    def put(self, request):
        serializer = SignatorySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response('Error with creating new signatory')


class SignatoryUpdate(APIView):
    def patch(self, request, pk):
        signatory = Signatory.objects.get(id=pk)
        serializer = SignatorySerializer(instance=signatory, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


class SignatoryDelete(APIView):

    def delete(self, request, pk):
        signatory = Signatory.objects.get(id=pk)
        signatory.delete()
        return Response('Signatory info deleted')

