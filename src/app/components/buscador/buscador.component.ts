import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _serviceHeroes: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params.termino);
      this.termino = params.termino;
      this.heroes = this._serviceHeroes.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }

}
