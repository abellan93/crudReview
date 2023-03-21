import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  constructor(private heroesService: HeroesService){}

  ngOnInit():void{
    this.heroesService.getHeroes().subscribe(resp=>console.log(resp))
  }
}
