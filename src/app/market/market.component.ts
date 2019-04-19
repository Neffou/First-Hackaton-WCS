import { Component, OnInit } from '@angular/core';
import { Egg } from '../egg';
import { EggsService } from '../eggs.service';
import { myMoney } from './money'


@Component({
    selector: 'app-market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
    public myMoney = myMoney;
    public egg: Egg;
    private myService: EggsService;
    constructor(param_service: EggsService) {
        this.myService = param_service;
        this.egg = null;
    }
    public eggArray = [];
    ngOnInit() {
        for (var i = 0; i < 9; ++i) {
            this.myService.getEggs().subscribe(
                (param_eggs: Egg) => {
                    this.egg = param_eggs;
                    this.eggArray.push(this.egg);
                }
            )
            console.log(this.eggArray);
        }
    }
    public getRandomPrice(): number {
        return Math.floor(Math.random() * 500);
    }

    whenClick() {
        if (this.myMoney > 0) {
            this.myMoney = this.myMoney - this.getRandomPrice();
            return this.myMoney;
        } else {
            this.myMoney = 0
            alert("You don't have money");
            javascript:window.location.reload()
            return this.myMoney;
        }
    }


}



