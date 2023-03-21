import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AddHeroesComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    HeroesListComponent,
  ],
  imports: [CommonModule,FlexLayoutModule, HeroesRoutingModule, MaterialModule],
})
export class HeroesModule {}
