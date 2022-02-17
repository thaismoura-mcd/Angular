
import { Component } from "@angular/core";

@Component({
  selector : 'pm-root',//name of the selector, pm = product management, we use root, since it's our root app component
   template: `
   <div><h1>{{pageTitle}}</h1>
   <pm-products> </pm-products>
   </div>
   `
})
export class AppComponent{
  pageTitle : string = 'Acme Product Management';
}
