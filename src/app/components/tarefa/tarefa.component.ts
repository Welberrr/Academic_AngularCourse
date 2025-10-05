import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, TarefaComponent],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})

export class TarefaComponent {
  listaDeTarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    // 2. USO DO MÉTODO 'getTarefas'
    // Carregamos a lista inicial de tarefas do serviço
    this.carregarTarefas();
  }
  
  carregarTarefas(): void {
    this.listaDeTarefas = this.tarefaService.getTarefas();
  }

  // Método no componente para chamar o serviço de adição
  adicionar(titulo: string): void {
    if (!titulo) { // Validação simples para não adicionar tarefa vazia
      return;
    }
    // 3. USO DO MÉTODO 'adicionarTarefa'
    this.tarefaService.adicionarTarefa(titulo);
    // Após adicionar, recarregamos a lista para refletir a mudança
    this.carregarTarefas();
  }

  // Método no componente para chamar o serviço de remoção
  remover(id: number): void {
    // 4. USO DO MÉTODO 'removerTarefa'
    this.tarefaService.removerTarefa(id);
    // Após remover, também recarregamos a lista
    this.carregarTarefas();
  }
}
