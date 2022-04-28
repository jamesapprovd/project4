from django.db import models


# Create your models here.

# class Signatory(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=150)
#     given_name = models.CharField(max_length=50)
#     family_name = models.CharField(max_length=50)
#     email = models.EmailField(max_length=254)
#     designation = models.CharField(max_length=80)
#     client_id = models.ForeignKey(Client, on_delete=models.DO_NOTHING, null=True)
#
#     def __str__(self):
#         return self.email
#
#
# class Document(models.Model):
#     id = models.AutoField(primary_key=True)
#     doc_title = models.CharField(max_length=150)
#     doc_date = models.DateField()
#     # upload = models.FileField(upload_to='uploads/')
#     #where can we save the files to?
#     client_id = models.ForeignKey(Client, on_delete=models.DO_NOTHING, null=True)
#
#     def __str__(self):
#         return self.title
