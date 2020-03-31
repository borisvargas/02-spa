import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _serviceHeroes: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this._serviceHeroes.getHeroes();
    console.log(this.heroes);
  }
  // sera llamado desde el componente HIJO heroe-tarjeta
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
