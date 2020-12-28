import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemModel } from 'src/app/common-component/item-card/item-card.component';

@Injectable()
export class MochimonoService {

  constructor() { }

  getMochimonos(category: string): Observable<ItemModel[]> {
    return of(ITEMS_MOCK);
  }
}

const ITEMS_MOCK: ItemModel[] = [
  {
    name: 'コート',
    price: '￥59,000',
    img: 'aa',
    brand: 'MHL',
    category1: 'ファッション',
    category2: '服',
    category3: 'アウター',
    category4: 'コート',
    description1: 'MHL',
    description2: 'JKL-K222',
    description3: '東京台場店で購入dddddddddddddddddddddddddddddddddddddddddddddddddddd',
    description4: 'サイズS',
    addDate: '2020/12/15'
  },
  {
    name: 'コート',
    price: '￥59,000',
    img: 'aa',
    brand: 'MHL',
    category1: 'ファッション',
    category2: '服',
    category3: 'アウター',
    category4: 'コート',
    description1: 'MHL',
    description2: 'JKL-K222',
    description3: '東京台場店で購入dddddddddddddddddddddddddddddddddddddddddddddddddddd',
    description4: 'サイズS',
    addDate: '2020/12/15'
  },
  {
    name: 'コート',
    price: '￥59,000',
    img: 'aa',
    brand: 'MHL',
    category1: 'ファッション',
    category2: '服',
    category3: 'アウター',
    category4: 'コート',
    description1: 'MHL',
    description2: 'JKL-K222',
    description3: '東京台場店で購入dddddddddddddddddddddddddddddddddddddddddddddddddddd',
    description4: 'サイズS',
    addDate: '2020/12/15'
  },
  {
    name: 'コート',
    price: '￥59,000',
    img: 'aa',
    brand: 'MHL',
    category1: 'ファッション',
    category2: '服',
    category3: 'アウター',
    category4: 'コート',
    description1: 'MHL',
    description2: 'JKL-K222',
    description3: '東京台場店で購入dddddddddddddddddddddddddddddddddddddddddddddddddddd',
    description4: 'サイズS',
    addDate: '2020/12/15'
  },
  {
    name: 'コート',
    price: '￥59,000',
    img: 'aa',
    brand: 'MHL',
    category1: 'ファッション',
    category2: '服',
    category3: 'アウター',
    category4: 'コート',
    description1: 'MHL',
    description2: 'JKL-K222',
    description3: '東京台場店で購入dddddddddddddddddddddddddddddddddddddddddddddddddddd',
    description4: 'サイズS',
    addDate: '2020/12/15'
  },
  {
    name: 'コート',
    price: '￥59,000',
    img: 'aa',
    brand: 'MHL',
    category1: 'ファッション',
    category2: '服',
    category3: 'アウター',
    category4: 'コート',
    description1: 'MHL',
    description2: 'JKL-K222',
    description3: '東京台場店で購入dddddddddddddddddddddddddddddddddddddddddddddddddddd',
    description4: 'サイズS',
    addDate: '2020/12/15'
  },
  {
    name: 'コート',
    price: '￥59,000',
    img: 'aa',
    brand: 'MHL',
    category1: 'ファッション',
    category2: '服',
    category3: 'アウター',
    category4: 'コート',
    description1: 'MHL',
    description2: 'JKL-K222',
    description3: '東京台場店で購入dddddddddddddddddddddddddddddddddddddddddddddddddddd',
    description4: 'サイズS',
    addDate: '2020/12/15'
  },
  {
    name: 'コート',
    price: '￥59,000',
    img: 'aa',
    brand: 'MHL',
    category1: 'ファッション',
    category2: '服',
    category3: 'アウター',
    category4: 'コート',
    description1: 'MHL',
    description2: 'JKL-K222',
    description3: '東京台場店で購入dddddddddddddddddddddddddddddddddddddddddddddddddddd',
    description4: 'サイズS',
    addDate: '2020/12/15'
  }
]
