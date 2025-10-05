import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, TarefaComponent],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
tarefas = [
  { id: 1, titulo: 'Estudar Angular', concluida: true },
  { id: 2, titulo: 'Fazer o almoço', concluida: false },
  { id: 3, titulo: 'Ir para a academia', concluida: false }
];
}
