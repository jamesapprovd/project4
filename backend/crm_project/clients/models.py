from django.db import models


# Create your models here.
class Client (models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    id_number = models.CharField(max_length=20)
    representative = models.CharField(max_length=40)
    is_Person = models.BooleanField(default=False)
    dateOfCreation = models.DateTimeField(verbose_name='date created', auto_now_add=True)

    def __str__(self):
        return self.name
