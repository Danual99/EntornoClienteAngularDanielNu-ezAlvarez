import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio6',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio6.component.html',
  styleUrl: './ejercicio6.component.css'
})
export class Ejercicio6Component {

  @Input() nombre!: string;
  @Input() descripcion!: string;
  @Input() precio!: number;
}
