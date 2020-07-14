import { Component, OnInit } from '@angular/core';
//para poder recuperar los parametros se debe inportar 
import { ActivatedRoute } from "@angular/router";

import { HeroesService, Heroe } from "../../services/heroes.service";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe : Heroe;


  constructor( private _activeRoute : ActivatedRoute,
               private _heroesService : HeroesService
             ) { 
              this._activeRoute.params.subscribe( params => {
                this.heroe = _heroesService.getHeroe(params['id']);
              });
  }


  

  ngOnInit(): void {
   
  }

}
