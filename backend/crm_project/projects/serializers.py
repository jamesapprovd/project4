from rest_framework import serializers
from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        # exclude = ['completed',]

#will take whatever in your model to validate, and it takes the name of the column to validate

    def validate_project_title(self, value):
        if len(value) < 5:
            raise serializers.ValidationError('Project Title has to be at least 5 characters long')

        return value



