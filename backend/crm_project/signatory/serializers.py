from rest_framework import serializers
from .models import Signatory


class SignatorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Signatory
        fields = '__all__'
        # exclude = ['completed',]

    def validate_signatory_name(self, value):
        if len(value) < 2:
            raise serializers.ValidationError('Signatory has to be at least 2 characters long')

        return value



