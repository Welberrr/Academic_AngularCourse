import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  tarefas = [
  { id: 1, titulo: 'Estudar Angular', concluida: true },
  { id: 2, titulo: 'Fazer o almoço', concluida: false },
  { id: 3, titulo: 'Ir para a academia', concluida: false }
];

  getTarefas() {
    return this.tarefas;
  }

  adicionarTarefa(titulo: string) {
    const novaTarefa = {
      id: this.tarefas.length + 1,
      titulo: titulo,
      concluida: false
    };
    this.tarefas.push(novaTarefa);
  }
  removerTarefa(id: number) {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  }
}
