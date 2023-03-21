import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [
      {
        path: 'heroes-list',
        component: HeroesListComponent,
      },
      {
        path: 'add-heroes',
        component: AddHeroesComponent,
      },
      {
        path: 'edit/:id',
        component: AddHeroesComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: ':id',
        component: HeroComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
