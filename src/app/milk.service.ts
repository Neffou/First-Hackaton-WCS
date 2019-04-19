import { Injectable } from '@angular/core';
import { Milk } from './milk';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MilkService {
  private myService : HttpClient;
  constructor(param_http: HttpClient) {
    this.myService = param_http;
   }
  public getMilk(): Observable<Milk> {
    return this.myService.get("http://easteregg.wildcodeschool.fr/api/stocks/milks?min=12345")
      .pipe(
         map(
          (param_data: any) => {
            let milk: Milk = new Milk();
            let i = Math.random()*5000;
            i = Math.floor(i)
            console.log(i)
            milk.price = param_data[i].price;
            milk.amount = param_data[i].amount;
            milk.unit = param_data[i].unit;
            return milk;
          }
          )
      )
  }
}







