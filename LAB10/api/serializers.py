from api.models import Company, Vacancy
from rest_framework import serializers

# 'id':self.id,
# 'name': self.name,
# 'description' : self.description,
# 'city' : self.city,
# 'address' : self.address

class CompanySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description',instance.description)
        instance.city = validated_data.get('city',instance.city)
        instance.address = validated_data.get('address',instance.address)
        instance.save()
        return instance


class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description')


# name = models.CharField(max_length=255)
#     description = models.TextField(max_length=10000)
#     salary = models.FloatField(default=0)
#     company = models.ForeignKey(Company,on_delete=models.CASCADE,default = 0)

class VacancySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.CharField()

    def create(self, validated_data):
        vacancy = Vacancy.objects.create(**validated_data)
        return vacancy

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description',instance.description)
        instance.salary = validated_data.get('salary',instance.salary)
        instance.company = validated_data.get('company',instance.company)
        instance.save()
        return instance


class VacancySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description',)