from django.db import models

# Create your models here.
class students(models.Model):
    f_name=models.CharField(max_length=50)
    l_name=models.CharField(max_length=50)
    course=models.CharField(max_length=50)

    def __str__(self):
        return self.f_name