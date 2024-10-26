import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {

  saludo: string = '';

  constructor(){
    this.generarSaludo();
  }

  generarSaludo(){
    const hora = new Date().getHours();

    if (hora < 12){
      this.saludo = 'Buenos dias';
    } else if (hora < 20){
      this.saludo = 'Buenas tardes';
    } else{
      this.saludo = 'Buenas noches';
    }
  }

}
