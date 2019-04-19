import { Injectable } from '@angular/core';
import { Egg } from './egg';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EggsService {
  private myService: HttpClient;
  constructor(param_http: HttpClient) {
    this.myService = param_http;
  }
  public getEggs(): Observable<Egg> {
    return this.myService.get("http://easteregg.wildcodeschool.fr/api/eggs/random")
      .pipe(
        map(
          (param_data: any) => {
            let egg: Egg = new Egg();
            egg.name = param_data.name;
            egg.image = param_data.image;
            egg.rarity = param_data.rarity;
            egg.power = param_data.power;
            return egg;
          }
        )
      )
      ;
  }
}
