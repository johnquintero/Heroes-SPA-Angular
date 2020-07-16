import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styles: [
  ]
})
export class HeroetarjetaComponent implements OnInit {

  @Input() heroe : Heroe;
  @Input() indice : number;
  @Output() heroeSeleccionado : EventEmitter<number>;

  constructor( private _router : Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    //llamando funciones del padre
    this.heroeSeleccionado.emit(this.indice);
  }

}
