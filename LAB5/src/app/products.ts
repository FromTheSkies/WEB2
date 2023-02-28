export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  linkImage: string;
  link: string;
  linkSpecsImage:string;
  rating: string;
  category: string;
  likes:number;
}

export const products = [
  {
    id: 1,
    name: 'Iphone 14 pro max',
    price: 1599,
    description: 'Iphone 14 pro max,256gb,purple',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.7',
    category: 'Smartphone',
    likes: 0
  },
  {
    id: 2,
    name: 'Iphone 13',
    price: 799,
    description: 'Iphone 13,128gb,white',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.9',
    category: 'Smartphone',
    likes: 0
  },
  {
    id: 3,
    name: 'Iphone 11',
    price: 599,
    description: 'Iphone 11,64gb,slim box,black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'3.0',
    category: 'Smartphone',
    likes: 0
  },
  {
    id: 4,
    name: 'Oneplus Ace Pro',
    price: 599,
    description: 'Oneplus Ace Pro,12/256gb,black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h8f/63288287232030/oneplus-ace-pro-12-gb-256-gb-chernyi-106903419-1.jpg',
    link: 'https://kaspi.kz/shop/p/oneplus-ace-pro-12-gb-256-gb-chernyi-106903419/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.6',
    category: 'Smartphone',
    likes: 0
  },
  {
    id: 5,
    name: 'Iphone 12',
    price: 699,
    description: 'Iphone 12,64gb,graphite',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h97/33279114575902/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'2.3',
    category: 'Smartphone',
    likes: 0
  }
  ,
  {
    id: 6,
    name: 'Oneplus Nords Buds',
    price: 69,
    description: 'Oneplus Nords Buds,Aptx',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h4c/63877348786206/oneplus-nord-buds-chernyi-106187540-1.jpg',
    link: 'https://kaspi.kz/shop/p/oneplus-nord-buds-chernyi-106187540/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Smartphone Gadgets',
    likes: 0
  }
  ,
  {
    id: 7,
    name: 'Наушники JBL Tune 510BT черный',
    price: 129,
    description: 'Наушники JBL Tune 510BT черный',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQUN-KN08NTNb8FxrfeZv-3dAfX4oMcwulWN0ItpT0vKZgTnj9A2FYaAiseEALw_wcB#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Smartphone Gadgets',
    likes: 0
  }
  ,
  {
    id: 8,
    name: 'Наушники Apple EarPods Lightning белый',
    price: 29,
    description: 'Наушники Apple EarPods Lightning белый',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h9c/31582164451358/apple-earpods-lightning-belyj-4801876-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQUN-KN08NTNb8FxrfeZv-3dAfX4oMcwulWN0ItpT0vKZgTnj9A2FYaAiseEALw_wcB#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Smartphone Gadgets',
    likes: 0
  }
  ,
  {
    id: 9,
    name: 'Наушники CAT EAR STN-28 фиолетовый',
    price: 39,
    description: 'Наушники CAT EAR STN-28 фиолетовый',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h10/34020718805022/cat-stn-28-fioletovyj-101768600-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/cat-ear-stn-28-fioletovyi-101768600/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQUN-KN08NTNb8FxrfeZv-3dAfX4oMcwulWN0ItpT0vKZgTnj9A2FYaAiseEALw_wcB#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Smartphone Gadgets',
    likes: 0
  }
  ,
  {
    id: 10,
    name: 'Наушники HyperX Cloud Stinger Core черный',
    price: 169,
    description: 'Наушники HyperX Cloud Stinger Core черный',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h80/32936512290846/hyperx-cloud-stinger-core-chernyi-100430429-1.jpg',
    link: 'https://kaspi.kz/shop/p/hyperx-cloud-stinger-core-chernyi-100430429/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQUN-KN08NTNb8FxrfeZv-3dAfX4oMcwulWN0ItpT0vKZgTnj9A2FYaAiseEALw_wcB#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Smartphone Gadgets',
    likes: 0
  }
  ,
  {
    id: 11,
    name: 'CASIO CT-X700C7',
    price: 499,
    description: 'Synthesizer CASIO CT-X700C7,Black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/h01/31648121520158/casio-ct-x700c7-black-14300106-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/casio-ct-x700c7-black-14300106/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Music Instruments',
    likes: 0
  }
  ,
  {
    id: 12,
    name: 'Yamaha PSR-E273',
    price: 399,
    description: 'Synthesizer Yamaha PSR-E273,Black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h31/33262797324318/yamaha-psr-e273-black-100671017-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/yamaha-psr-e273-black-100671017/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.7',
    category: 'Music Instruments',
    likes: 0
  }
  ,
  {
    id: 13,
    name: 'Гитара YAMAHA C40 Natural',
    price: 299,
    description: 'Гитара YAMAHA C40 Natural',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h83/31545575374878/yamaha-c40-natural-14100052-1.jpg',
    link: 'https://kaspi.kz/shop/p/yamaha-c40-natural-14100052/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQUN-KN08NTNb8FxrfeZv-3dAfX4oMcwulWN0ItpT0vKZgTnj9A2FYaAiseEALw_wcB#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.7',
    category: 'Music Instruments',
    likes: 0
  }
  ,
  {
    id: 14,
    name: 'Ударная установка Yamaha DTX452K Black',
    price: 599,
    description: 'Ударная установка Yamaha DTX452K Black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h65/32209907515422/yamaha-dtx452k-black-44900106-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/yamaha-psr-e273-black-100671017/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.7',
    category: 'Music Instruments',
    likes: 0
  }
  ,
  {
    id: 15,
    name: 'Гитара YAMAHA SLG200N',
    price: 599,
    description: 'Гитара YAMAHA SLG200N TBS Tobacco Brown Sunburst',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h94/31816966602782/yamaha-slg200n-tbs-tobacco-brown-sunburst-14100511-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/yamaha-slg200n-tbs-tobacco-brown-sunburst-14100511/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQUN-KN08NTNb8FxrfeZv-3dAfX4oMcwulWN0ItpT0vKZgTnj9A2FYaAiseEALw_wcB#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.7',
    category: 'Music Instruments',
    likes: 0
  }
  ,
  {
    id: 16,
    name: 'Apple Macbook air 13 MGN63',
    price: 1099,
    description: 'Laptop Apple Macbook air 13 MGN63,Gray,256gb',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Laptops',
    likes: 0
  },
  {
    id: 17,
    name: 'ASUS TUF Gaming A15 ',
    price: 999,
    description: 'Laptop Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0,Black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Laptops',
    likes: 0
  }
  ,
  {
    id: 18,
    name: 'Ноутбук Apple MacBook Air 13 MLXW3 серый',
    price: 1999,
    description: 'Ноутбук Apple MacBook Air 13 MLXW3 серый',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/he9/52679187890206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQUN-KN08NTNb8FxrfeZv-3dAfX4oMcwulWN0ItpT0vKZgTnj9A2FYaAiseEALw_wcB#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Laptops',
    likes: 0
  }
  ,
  {
    id: 19,
    name: 'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
    price: 2999,
    description: 'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQUN-KN08NTNb8FxrfeZv-3dAfX4oMcwulWN0ItpT0vKZgTnj9A2FYaAiseEALw_wcB#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Laptops',
    likes: 0
  }
  ,
  {
    id: 20,
    name: 'Ноутбук ASUS ROG Strix G15 G513IH 90NR07P2-M00160 серый',
    price: 999,
    description: 'Ноутбук ASUS ROG Strix G15 G513IH 90NR07P2-M00160 серый',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h89/34101177024542/asus-rog-strix-g15-g513ih-90nr07p2-m00160-seryj-101686597-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g15-g513ih-90nr07p2-m00160-seryi-101686597/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQUN-KN08NTNb8FxrfeZv-3dAfX4oMcwulWN0ItpT0vKZgTnj9A2FYaAiseEALw_wcB#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3',
    category: 'Laptops',
    likes: 0
  }
];

