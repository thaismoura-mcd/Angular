
import { Component } from "@angular/core";

@Component({
  selector : 'pm-root',//name of the selector, pm = product management, we use root, since it's our root app component
   template: `
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">{{pageTitle}}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" routerLink="/welcome">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/products">Products</a>
      </li>
      <router-outlet> </router-outlet>
   `
})
export class AppComponent{
  pageTitle : string = 'Acme Product Management';
}
