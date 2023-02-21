export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  linkImage: string;
  link: string;
  linkSpecsImage:string;
  rating: string;
}

export const products = [
  {
    id: 1,
    name: 'Iphone 14 pro max',
    price: 1599,
    description: 'Iphone 14 pro max,256gb,purple',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.7'
    
  },
  {
    id: 2,
    name: 'Iphone 13',
    price: 799,
    description: 'Iphone 13,128gb,white',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.9'
  },
  {
    id: 3,
    name: 'Iphone 11',
    price: 599,
    description: 'Iphone 11,64gb,slim box,black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'3.0'
  },
  {
    id: 4,
    name: 'Oneplus Ace Pro',
    price: 599,
    description: 'Oneplus Ace Pro,12/256gb,black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h8f/63288287232030/oneplus-ace-pro-12-gb-256-gb-chernyi-106903419-1.jpg',
    link: 'https://kaspi.kz/shop/p/oneplus-ace-pro-12-gb-256-gb-chernyi-106903419/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.6'
  },
  {
    id: 5,
    name: 'Iphone 12',
    price: 699,
    description: 'Iphone 12,64gb,graphite',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h97/33279114575902/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'2.3'
  }
  ,
  {
    id: 6,
    name: 'Oneplus Nords Buds',
    price: 69,
    description: 'Oneplus Nords Buds,Aptx',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h4c/63877348786206/oneplus-nord-buds-chernyi-106187540-1.jpg',
    link: 'https://kaspi.kz/shop/p/oneplus-nord-buds-chernyi-106187540/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3'
  }
  ,
  {
    id: 7,
    name: 'CASIO CT-X700C7',
    price: 499,
    description: 'Synthesizer CASIO CT-X700C7,Black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/h01/31648121520158/casio-ct-x700c7-black-14300106-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/casio-ct-x700c7-black-14300106/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3'
  }
  ,
  {
    id: 8,
    name: 'Yamaha PSR-E273',
    price: 399,
    description: 'Synthesizer Yamaha PSR-E273,Black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h31/33262797324318/yamaha-psr-e273-black-100671017-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/yamaha-psr-e273-black-100671017/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.7'
  }
  ,
  {
    id: 9,
    name: 'Apple Macbook air 13 MGN63',
    price: 1099,
    description: 'Laptop Apple Macbook air 13 MGN63,Gray,256gb',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3'
  },
  {
    id: 10,
    name: 'ASUS TUF Gaming A15 ',
    price: 999,
    description: 'Laptop Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0,Black',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=710000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHNH6FQGfAkgQyMei9J3wfBuxV4zRTeD0mav3fmjSgvv4KPzHTFfj5xoCcyoQAvD_BwE#!/item',
    linkSpecsImage:'https://i.ibb.co/yRTnG8W/Screenshot-2023-02-20-at-21-15-03.png',rating:'4.3'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/