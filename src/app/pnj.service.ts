import { Injectable } from '@angular/core';
import { Character } from './pnj';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PnjService {
  private myService: HttpClient;
  constructor(param_http: HttpClient) {
    this.myService = param_http;
  }
  public getChars(): Observable<Character> {
    return this.myService.get('http://easteregg.wildcodeschool.fr/api/characters/random')
      .pipe(
        map(
          (param_data: any) => {
            let char: Character = new Character();
            char.name = param_data.name;
            char.image = param_data.image;
            char.gender = param_data.gender;
            char.species = param_data.species;
            char.origin = param_data.origin;
            return char;
          }
        )
      )
      ;
  }
}