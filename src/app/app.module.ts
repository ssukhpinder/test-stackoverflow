import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostCategoriesComponent } from './cost-categories/cost-categories.component';
import { CostCategoriesDetailsComponent } from './cost-categories-details/cost-categories-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CostCompareComponent } from './cost-compare/cost-compare.component';
import {CostCategoriesDetailsGuard} from './guard'
@NgModule({
  declarations: [
    AppComponent,
    CostCategoriesComponent,
    CostCategoriesDetailsComponent,
    NotFoundComponent,
    CostCompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CostCategoriesDetailsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
