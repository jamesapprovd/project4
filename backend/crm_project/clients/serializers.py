from rest_framework import serializers
from .models import Client


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'
        # exclude = ['completed',]

#will take whatever in your model to validate, and it takes the name of the column to validate

    def validate_name(self, value):
        if len(value) < 5:
            raise serializers.ValidationError('Name has to be at least 5 characters long')

        return value



