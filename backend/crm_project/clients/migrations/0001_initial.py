# Generated by Django 4.0.4 on 2022-04-28 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=40)),
                ('id_number', models.CharField(max_length=20)),
                ('representative', models.CharField(max_length=40)),
                ('is_Person', models.BooleanField()),
                ('dateOfCreation', models.DateTimeField(auto_now_add=True, verbose_name='date created')),
            ],
        ),
    ]
