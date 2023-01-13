import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image:string="https://rincontic.org/wp-content/uploads/2020/02/image.png";
  public image1:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgm7CO73EtTxq0n8Rti_OW6OlZcBqgwSUMg&usqp=CAU";
  public image2:string="https://miro.medium.com/max/925/0*97eKvRbKmy7pSCmH.jpg";
  public image3:string="https://5.imimg.com/data5/DT/DS/RS/GLADMIN-14526645/selection-040-500x500.png";
  public Titulo:string="Arquitectura de Microservicios";
  public Titulo1:string="reactive Programming"
  public Titulo2:string="Seguridad con spring"
 
  constructor() {}

  ngOnInit():void{

  }

}
