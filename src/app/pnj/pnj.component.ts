import { Component, OnInit } from '@angular/core';
import { Character } from '../pnj';
import { PnjService } from '../pnj.service'

@Component({
  selector: 'app-pnj',
  templateUrl: './pnj.component.html',
  styleUrls: ['./pnj.component.css']
})
export class PnjComponent implements OnInit {
  public char: Character;
  private myService: PnjService;
  constructor(param_service: PnjService) {
    this.myService = param_service;
    this.char = null;
  }
  public charArray = [];
  ngOnInit() {
    this.myService.getChars().subscribe(
      (param_chars: Character) => {
        this.char = param_chars;
        this.charArray.push(this.char);
      }
    )
    console.log(this.charArray);
  }
}