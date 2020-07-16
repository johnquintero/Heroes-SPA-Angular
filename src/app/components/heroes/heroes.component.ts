import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Heroe[] = [];

  //pasa antes que se termine de cargar la pagina
  constructor( private _heroesService : HeroesService,
               private _router :  Router,
               private _activeRoute : ActivatedRoute 
    ) { 
        this._activeRoute.params.subscribe(params=>{
          if (params['termino'] != undefined) {
            this.heroes = _heroesService.buscarHerore(params['termino']);
          }
          else{
            this.heroes = this._heroesService.getHeroes();
          }
        })
    }

  //pasa cuando ya toda la pagina esta cargada
  ngOnInit(): void {
    
    console.log(this.heroes); 
  }

  verHeroe(idx : number){
      this._router.navigate(['/heroe',idx]);
  }

  

}
