import { style } from "@angular/animations";
import { componentFactoryName } from "@angular/compiler";
import { LifecycleHooks } from "@angular/compiler/src/lifecycle_reflector";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DogService } from "./dog-service";
import { IProduct } from "./IProduct";
import { ProductService } from "./product-service";

@Component({
    selector : 'pm-products',
    templateUrl: './product-list-component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{


  constructor( private productService: ProductService, private dogsService: DogService){
  }
  
    pageTitle: any;
    imageWidth =50;
    imageMargin=2;
    showImage = false;
    hideImage = 'Hide Image'
    showTheImage = 'Show Image'
    listFilter = ''
    products: IProduct[] = [];

      toggleImage(): void{
        this.showImage = !this.showImage;
      }
  
      ngOnInit(): void {
        this.productService.getProducts().subscribe({
          next: products => this.products = products
        });
        this.dogsService.getDogs().subscribe({
          next: pageTitle => this.pageTitle = pageTitle
        }); 
        console.log("Method not implemented.");
      }     
}