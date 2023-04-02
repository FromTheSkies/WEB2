from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return {
            'name': self.name
        }

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(max_length=10000)
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    category = models.ForeignKey(Category,on_delete=models.CASCADE,default=0)

    def to_json(self):
        return {
            'name': self.name,
            'price': self.price,
            'description':self.description,
            'count':self.count,
            'is_active':self.is_active,
            'category':self.category.name
        }

