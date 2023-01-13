import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string
  subtitulo:string
  nro?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Iniciando en Angular';
  public arregloTarjetas: Tarjeta[]=[]

  ngOnInit():void{
    this.arregloTarjetas=[
      {titulo:'video 1',subtitulo:'subtitulo video 1'},
      {titulo:'video 2',subtitulo:'subtitulo video 2'},
      {titulo:'video 2',subtitulo:'subtitulo video 2'}
      
      
    ]
  }

}
