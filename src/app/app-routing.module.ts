import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { HomeListComponent } from './home-list/home-list.component';
import { SportsListComponent } from './sports-list/sports-list.component';
import { TechListComponent } from './tech-list/tech-list.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeListComponent},
  {path:'sports',component:SportsListComponent},
  {path:'tech',component:TechListComponent},
  {path:'country',component:CountryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[HomeListComponent,SportsListComponent,TechListComponent,CountryListComponent]
