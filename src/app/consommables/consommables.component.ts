import { Component, OnInit } from '@angular/core';
import { Milk } from '../milk';
import { MilkService } from '../milk.service'

@Component({
  selector: 'app-consommables',
  templateUrl: './consommables.component.html',
  styleUrls: ['./consommables.component.css']
})
export class ConsommablesComponent implements OnInit {
  public milk: Milk;
  private myService: MilkService;
  constructor(param_service: MilkService) {
    this.myService = param_service;
    this.milk = null;
   }
  public milkArray = [];
  ngOnInit() {
    this.myService.getMilk().subscribe(
      (param_milk: Milk) => {
        this.milk = param_milk;
        this.milkArray.push(this.milk)
      }
    )
    console.log(this.milkArray)
  }
}