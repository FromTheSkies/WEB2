from django.shortcuts import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Vacancy
from api.serializers import VacancySerializer2
from api.models import Company

from api.serializers import CompanySerializer2


class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class companyDetailAPIView(APIView):
    def get_object(self, company_id):
        try:
            return Company.objects.get(pk=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer2(instance)
        return Response(serializer.data)

    def put(self, request, company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer2(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, company_id):
        instance = self.get_object(company_id)
        instance.delete()
        return Response({'deleted': True})





class VacancyListAPIView(APIView):
    def get(self, request):
        companies = Vacancy.objects.all()
        serializer = VacancySerializer2(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailAPIView(APIView):
    def get_object(self, vacancy_id):
        try:
            return Vacancy.objects.get(pk=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer2(instance)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer2(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        instance.delete()
        return Response({'deleted': True})