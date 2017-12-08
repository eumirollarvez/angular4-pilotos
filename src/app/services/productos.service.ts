import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando_productos:boolean = true;

  constructor( private http:Http) {
      this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando_productos = true;

    this.http.get('https://pilotos-a97b4.firebaseio.com/productos_idx.json')
             .subscribe(data => {
               console.log(data.json());
               this.cargando_productos = false;
             })
  }

}
