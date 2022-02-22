import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list-component';
import { convertToSpacesPipe } from './shared/convert-to-space-pipe';
import { StarComponent } from './shared/star.component';
import { ProductsdetailComponent } from './products/productsdetail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpacesPipe, 
    StarComponent,
    ProductsdetailComponent,
    ProductsdetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
