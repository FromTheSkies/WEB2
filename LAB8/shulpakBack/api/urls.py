
from django.contrib import admin
from django.urls import include, path
from api import views

urlpatterns = [
    path('home/',views.home),
    path('products/',views.product_list),
    path('products/<int:product_id>/',views.product_detail),
    path('categories/',views.category_list),
    path('categories/<int:category_id>/',views.category_detail),
    path('categories/<int:category_id>/products/',views.products_Of_Category)
]
