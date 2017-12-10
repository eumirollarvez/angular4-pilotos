import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductosService } from "../../services/productos.service"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {

  producto:any = undefined;
  cod:string=undefined;

  constructor(private route:ActivatedRoute,
              public _ps:ProductosService){

      route.params.subscribe(parametros=>{

        _ps.cargar_producto( parametros['id'] )
        .subscribe(resp =>{

          this.producto = resp.json();
          this.cod = parametros['id'];
          //console.log( this.producto );
        })

      })
  }

}
