from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Client
from .serializers import ClientSerializer


# Create your views here.
class ClientList(APIView):

    def get(self, request):
        clients = Client.objects.all()
        serializer = ClientSerializer(clients, many=True)

        return Response(serializer.data)


class ClientDetails(APIView):
    def get(self, request, pk):
        #passing in a Primary Key, and searching via ID
        client = Client.objects.get(id=pk)
        serializer = ClientSerializer(client, many=False)

        return Response(serializer.data)


class ClientCreate(APIView):
    def put(self, request):
        serializer = ClientSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response('Error with creating new client')


class ClientUpdate(APIView):

    def patch(self, request, pk):
        client = Client.objects.get(id=pk)
        serializer = ClientSerializer(instance=client, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


class ClientDelete(APIView):

    def delete(self, request, pk):
        client = Client.objects.get(id=pk)
        client.delete()
        return Response('Client info deleted')