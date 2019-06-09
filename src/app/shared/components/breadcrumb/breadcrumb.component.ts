import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Output() breadCrumbItem = new EventEmitter();
  @ViewChild('breadcrumb') myBreadcrumb: ElementRef;

  arrBreadCrumb = [{
    text: 'Información general',
    component: 'infogeneral',
    active: false
  }, {
    text: 'Episodios',
    component: 'chapters',
    active: false
  }, {
    text: 'Tráileres y más',
    component: 'traileres',
    active: false
  },
  {
    text: 'Detalles',
    component: 'detalles',
    active: false
  }];


  public clicked: boolean;
  constructor() {
  }

  ngOnInit() {
    this.arrBreadCrumb[0].active = true;
  }





  showBreadCrumb(item: any) {

    this.breadCrumbItem.emit(item.component);
    this.arrBreadCrumb.forEach(elem => {
      elem.active = false;
    });
    item.active = true;
  }

}
