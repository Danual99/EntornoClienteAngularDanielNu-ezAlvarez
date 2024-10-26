import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  
  @Input() nombre:string = 'Internauta';


}
