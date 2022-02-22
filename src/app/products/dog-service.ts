import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IDogs } from "./IDogs";

@Injectable( {
    providedIn: 'root'
})
export class DogService{
    private dogsUrl  = "https://dog.ceo/api/breeds/image/random"
 constructor(private http: HttpClient) {}
     getDogs(): Observable<IDogs[]> { 
       
        return this.http.get<IDogs[]>(this.dogsUrl)
        
}}