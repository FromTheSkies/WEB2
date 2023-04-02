from django.shortcuts import render
import json
from django.http.response import HttpResponse, JsonResponse
from datetime import datetime, timedelta
import requests

from api.models import Category, Product


def home(request):
    return HttpResponse('home page')

products = [] 
for product in Product.objects.all(): 
    products.append(product.to_json())

categories = [] 
for category in Category.objects.all(): 
    categories.append(category.to_json())
# print(categories)

# products = [
#   {
#     'id': 1,
#     'name': 'Iphone 14 pro max',
#     'price': 1599,
#     'description': 'Iphone 14 pro max,256gb,purple',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':1
#   },
#   {
#     'id': 2,
#     'name': 'Iphone 13',
#     'price': 799,
#     'description': 'Iphone 13,128gb,white',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':1
#   },
#   {
#     'id': 3,
#     'name': 'Iphone 11',
#     'price': 599,
#     'description': 'Iphone 11,64gb,slim box,black',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':1
#   },
#   {
#     'id': 4,
#     'name': 'Oneplus Ace Pro',
#     'price': 599,
#     'description': 'Oneplus Ace Pro,12/256gb,black',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':1
#   },
#   {
#     'id': 5,
#     'name': 'Iphone 12',
#     'price': 699,
#     'description': 'Iphone 12,64gb,graphite',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':1
#   }
#   ,
#   {
#     'id': 6,
#     'name': 'Oneplus Nords Buds',
#     'price': 69,
#     'description': 'Oneplus Nords Buds,Aptx',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':2
#   }
#   ,
#   {
#     'id': 7,
#     'name': 'Наушники JBL Tune 510BT черный',
#     'price': 129,
#     'description': 'Наушники JBL Tune 510BT черный',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':2
#   }
#   ,
#   {
#     'id': 8,
#     'name': 'Наушники Apple EarPods Lightning белый',
#     'price': 29,
#     'description': 'Наушники Apple EarPods Lightning белый',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':2
#   }
#   ,
#   {
#     'id': 9,
#     'name': 'Наушники CAT EAR STN-28 фиолетовый',
#     'price': 39,
#     'description': 'Наушники CAT EAR STN-28 фиолетовый',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':2
#   }
#   ,
#   {
#     'id': 10,
#     'name': 'Наушники HyperX Cloud Stinger Core черный',
#     'price': 169,
#     'description': 'Наушники HyperX Cloud Stinger Core черный',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':2
#   }
#   ,
#   {
#     'id': 11,
#     'name': 'CASIO CT-X700C7',
#     'price': 499,
#     'description': 'Synthesizer CASIO CT-X700C7,Black',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':3
#   }
#   ,
#   {
#     'id': 12,
#     'name': 'Yamaha PSR-E273',
#     'price': 399,
#     'description': 'Synthesizer Yamaha PSR-E273,Black',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':3
#   }
#   ,
#   {
#     'id': 13,
#     'name': 'Гитара YAMAHA C40 Natural',
#     'price': 299,
#     'description': 'Гитара YAMAHA C40 Natural',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':3
#   }
#   ,
#   {
#     'id': 14,
#     'name': 'Ударная установка Yamaha DTX452K Black',
#     'price': 599,
#     'description': 'Ударная установка Yamaha DTX452K Black',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':3
#   }
#   ,
#   {
#     'id': 15,
#     'name': 'Гитара YAMAHA SLG200N',
#     'price': 599,
#     'description': 'Гитара YAMAHA SLG200N TBS Tobacco Brown Sunburst',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':3
#   }
#   ,
#   {
#     'id': 16,
#     'name': 'Apple Macbook air 13 MGN63',
#     'price': 1099,
#     'description': 'Laptop Apple Macbook air 13 MGN63,Gray,256gb',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':4
#   },
#   {
#     'id': 17,
#     'name': 'ASUS TUF Gaming A15 ',
#     'price': 999,
#     'description': 'Laptop Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0,Black',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':4
#   }
#   ,
#   {
#     'id': 18,
#     'name': 'Ноутбук Apple MacBook Air 13 MLXW3 серый',
#     'price': 1999,
#     'description': 'Ноутбук Apple MacBook Air 13 MLXW3 серый',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':4
#   }
#   ,
#   {
#     'id': 19,
#     'name': 'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
#     'price': 2999,
#     'description': 'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':4
#   }
#   ,
#   {
#     'id': 20,
#     'name': 'Ноутбук ASUS ROG Strix G15 G513IH 90NR07P2-M00160 серый',
#     'price': 999,
#     'description': 'Ноутбук ASUS ROG Strix G15 G513IH 90NR07P2-M00160 серый',
#     'count': 0,
#     'is_active':False,
#     'categoryOfProduct':4
#   }
# ]

# categories = [
#   {
#       'id': 1,
#       'name': 'Smartphone',
#   },
#   {
#       'id': 2,
#       'name': 'SmartphoneGadgets',
#   },
#   {
#       'id': 3,
#       'name': 'MusicInstruments',
#   },
#   {
#       'id': 4,
#       'name': 'Laptops',
#   }
# ]


def product_list(request):
    return JsonResponse(products,safe=False,json_dumps_params={'indent':2})

def product_detail(request,product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product,safe=False,json_dumps_params={'indent':2})
    return JsonResponse({'error':'Product not found'})


def category_list(request):
    return JsonResponse(categories,safe=False,json_dumps_params={'indent':2})

def category_detail(request,category_id):
    for category in categories:
        if category['id'] == category_id:
            return JsonResponse(category,safe=False,json_dumps_params={'indent':2})
    return JsonResponse({'error':'Category not found'})

def products_Of_Category(request,category_id):
    category = Category.objects.get(pk=category_id)
    # print(category.name)
    matching_products = []
    for product in products:
      if(product['category']==category.name):
        matching_products.append(product)
    if len(matching_products) > 0:
        return JsonResponse(matching_products, safe=False, json_dumps_params={'indent':2})
    else:
        return JsonResponse({'error': 'Products not found'})
      # print(product['category'])
    # for product in products:
    #   if product['category'] == category_id:
    #     matching_products.append(product)
    # if len(matching_products) > 0:
    #     return JsonResponse(matching_products, safe=False, json_dumps_params={'indent':2})
    # else:
    #     return JsonResponse({'error': 'Products not found'})
    return JsonResponse({'error': 'Products not found'})
    





