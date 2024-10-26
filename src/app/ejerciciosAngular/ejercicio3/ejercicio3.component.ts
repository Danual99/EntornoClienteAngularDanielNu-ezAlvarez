import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  tareas: string[] = []; 
  nuevaTarea: string = ''; 

  anyadirTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push(this.nuevaTarea.trim());
      this.nuevaTarea = ''; 
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
