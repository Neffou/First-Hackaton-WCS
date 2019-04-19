import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PnjComponent } from './pnj/pnj.component';
import { ConsommablesComponent } from './consommables/consommables.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    HomeComponent,
    PnjComponent,
    ConsommablesComponent,
    ChocolatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          component: HomeComponent,
          pathMatch: "full"
        },
        {
          path: "market",
          component: MarketComponent,
          pathMatch: "full"
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
