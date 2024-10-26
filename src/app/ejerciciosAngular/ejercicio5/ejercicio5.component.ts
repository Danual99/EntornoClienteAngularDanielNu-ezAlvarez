import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio5.component.html',
  styleUrl: './ejercicio5.component.css'
})
export class Ejercicio5Component {

  comentario: string = ''; 
  comentarios: string[] = []; 

  
  @Output() comentarioEnviado = new EventEmitter<string>();

  enviarComentario() {
    if (this.comentario.trim()) {
      this.comentarios.push(this.comentario);
      this.comentarioEnviado.emit(this.comentario); 
      this.comentario = ''; 
    }
  }
}
