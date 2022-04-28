from django.db import models
from ..clients.models import Client


# Create your models here.
class Project(models.Model):
    id = models.AutoField(primary_key=True)
    project_title = models.CharField(max_length=200)
    project_info = models.TextField()
    project_creation_date = models.DateTimeField(verbose_name='date created', auto_now_add=True)
    client_id = models.ForeignKey(Client, on_delete=models.DO_NOTHING, null=True)

    def __str__(self):
        return self.project_title

