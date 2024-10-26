import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Ejercicio1Component } from './ejerciciosAngular/ejercicio1/ejercicio1.component';
import {Ejercicio2Component} from './ejerciciosAngular/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejerciciosAngular/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejerciciosAngular/ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './ejerciciosAngular/ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './ejerciciosAngular/ejercicio6/ejercicio6.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Componente1Component,Ejercicio1Component,Ejercicio2Component,
    Ejercicio3Component,Ejercicio4Component,Ejercicio5Component,Ejercicio6Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  comentariosRecibidos: string[] = [];

  onComentarioEnviado(nuevoComentario: string) {
    this.comentariosRecibidos.push(nuevoComentario);
    console.log('Comentario recibido:', nuevoComentario); //Muestra el comentario por consola
  }
}
