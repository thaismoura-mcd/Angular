import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-productsdetail',
  templateUrl: './productsdetail.component.html',
  styleUrls: ['./productsdetail.component.css']
})
export class ProductsdetailComponent implements OnInit {
pageTitle: string = 'Products detail'
  constructor() { }

  ngOnInit(): void {
  }

}
