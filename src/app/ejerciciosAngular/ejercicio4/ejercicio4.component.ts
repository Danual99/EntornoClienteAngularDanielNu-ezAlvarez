import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {

  tiempo: number = 0; 
  intervalo: any; 
  tiempoRestante: number = 0; 

  start() {
    if (this.tiempo > 0) {
      this.tiempoRestante = this.tiempo;
      this.intervalo = setInterval(() => {
        if (this.tiempoRestante > 0) {
          this.tiempoRestante--;
        } else {
          clearInterval(this.intervalo);
        }
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalo);
  }

  onTimeInput(event: Event) {
    const inputElement = event.target as HTMLInputElement; 
    this.tiempo = inputElement.value ? Number(inputElement.value) : 0; 
  }
}
