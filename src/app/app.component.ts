import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { TarefaService } from './services/tarefa.service';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarefaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}
