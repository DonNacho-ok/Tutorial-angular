import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},//lista de heroes
  { path: 'dashboard', component: DashboardComponent},//dashboard
  { path: 'detail/:id', component: HeroDetailComponent},//hero detail
  { path:'', redirectTo: '/dashboard', pathMatch: 'full'},//redireccion de la pagina principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
