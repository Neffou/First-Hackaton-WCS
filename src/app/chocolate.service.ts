import { Injectable } from '@angular/core';
import { Chocolate } from './chocolate';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChocolateService {
  private myService : HttpClient;
  constructor(param_http: HttpClient) {
    this.myService = param_http;
   }
  public getChocolate(): Observable<Chocolate> {
    return this.myService.get("http://easteregg.wildcodeschool.fr/api/stocks/chocolates?min=12345")
      .pipe(
         map(
          (param_data: any) => {
            let chocolate: Chocolate = new Chocolate();
            let i = Math.random()*5000;
            i = Math.floor(i)
            console.log(i)
            chocolate.price = param_data[0].price;
            chocolate.amount = param_data[0].amount;
            chocolate.unit = param_data[0].unit;
            return chocolate;
          }
          )
      )
  }
}


