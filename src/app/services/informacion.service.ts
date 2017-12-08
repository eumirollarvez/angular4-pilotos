import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  equipo:any[] = [];
  cargada_conocenos:boolean = false;

  constructor(public http:Http) {
    this.carga_info();
    this.carga_conocenos();
  }

  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
              .subscribe(data => {
                //console.log(data.json());
                this.cargada = true;
                this.info = data.json();
              });
  }

  public carga_conocenos(){
    this.http.get("https://pilotos-a97b4.firebaseio.com/equipo.json")
              .subscribe(data => {
                console.log(data.json());
                this.cargada_conocenos = true;
                this.equipo = data.json();
              });
  }

}
