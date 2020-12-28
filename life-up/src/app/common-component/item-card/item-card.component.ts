import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input()
  item: ItemModel;

  constructor() { }

  ngOnInit() {
  }

}

export type ItemModel = {
  name: string;
  price: string;
  img: string;
  brand: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  addDate: string;
}
