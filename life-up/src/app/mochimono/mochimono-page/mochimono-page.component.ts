
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'src/app/common-component/item-card/item-card.component';
import { MochimonoService } from '../service/mochimono.service';

@Component({
  selector: 'app-mochimono-page',
  templateUrl: './mochimono-page.component.html',
  styleUrls: ['./mochimono-page.component.css']
})
export class MochimonoPageComponent implements OnInit {

  category: string = 'top';
  items: ItemModel[];

  constructor(
    private _service: MochimonoService,
    private _router: ActivatedRoute) { }

  ngOnInit() {
    const category = this._router.snapshot.queryParamMap.get('category');
    if (category) {
      this.category = category;
    }
    this._service.getMochimonos(this.category).subscribe((mochimonos => {
      this.items = mochimonos;
    }));
  }

}


