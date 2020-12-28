import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Input()
  toolBarTitle = 'title';

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onMenuClick(event: MouseEvent) {
    const id = event.currentTarget['id'];
    this._router.navigate(['./' + id]);
  }

}
