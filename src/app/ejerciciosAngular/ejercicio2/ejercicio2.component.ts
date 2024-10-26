import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit, OnDestroy {

  public horaActual: string = '';
  private intervalId: number | undefined;
  public detenido: boolean = false;

  ngOnInit(): void {
    this.actualizarHora(); 
    this.startInterval(); 
  }

  startInterval() {
    if (!this.intervalId) {
      this.intervalId = window.setInterval(() => {
        if (!this.detenido) {
          this.actualizarHora();
        }
      }, 1000);
    }
  }

 
  actualizarHora() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    this.horaActual = `${horas}:${minutos}:${segundos}`;
  }

 
  detenerTiempo() {
    this.detenido = true; 
  }

  
  ngOnDestroy(): void {
    this.limpiarIntervalo(); 
  }

  
  private limpiarIntervalo() {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined; 
    }
  }
}
