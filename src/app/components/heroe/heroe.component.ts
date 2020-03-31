import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  private id: number;
  heroe: Heroe;

  constructor(private activateRoute: ActivatedRoute, private _serviceHeroes: HeroesService) {
    this.activateRoute.params.subscribe( params => {
      console.log(params);
      this.id = params.id;
      this.heroe = this._serviceHeroes.getHeroe(this.id);
      console.log(this.heroe);
    });
  }

  ngOnInit() {

  }

}
