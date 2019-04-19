import { Component, OnInit } from '@angular/core';
import { Chocolate } from '../chocolate';
import { ChocolateService } from '../chocolate.service'

@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})
export class ChocolatesComponent implements OnInit {
  public chocolate: Chocolate;
  private myService: ChocolateService;
  constructor(param_service: ChocolateService) {
    this.myService = param_service;
    this.chocolate = null;
   }
  public chocolatArray = [];
  ngOnInit() {
    this.myService.getChocolate().subscribe(
      (param_chocolat: Chocolate) => {
        this.chocolate = param_chocolat;
        this.chocolatArray.push(this.chocolate)
      }
    )
    console.log(this.chocolatArray)
  }
}