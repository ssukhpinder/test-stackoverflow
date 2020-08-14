import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostCategoriesComponent } from './cost-categories/cost-categories.component';
import { CostCategoriesDetailsComponent } from './cost-categories-details/cost-categories-details.component';
import { CostCompareComponent } from './cost-compare/cost-compare.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CostCategoriesDetailsGuard } from './guard';

const routes: Routes = [

  {path: '', component: CostCompareComponent},
  {path: 'cost-categories', component: CostCategoriesComponent},
  {path: 'cost-categories/:id', component: CostCategoriesDetailsComponent, canActivate: [CostCategoriesDetailsGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
