from django.db import models


# Create your models here.

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
