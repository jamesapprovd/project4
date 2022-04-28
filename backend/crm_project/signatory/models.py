from django.db import models
from clients.models import Client


# Create your models here.
class Signatory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    given_name = models.CharField(max_length=50)
    family_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    designation = models.CharField(max_length=80)
    client_id = models.ForeignKey(Client, on_delete=models.DO_NOTHING, null=True)
    document_number = models.CharField(max_length=30)

    def __str__(self):
        return self.name

