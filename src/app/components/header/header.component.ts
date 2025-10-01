import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  tituloHeader = 'Youtube Welber Henrique';
  valorInput = 'Valor Inicial'
  aplicarClasse = false;
  estiloCor = 'orange';
  tipoUsuario: 'feliz' | 'legal' = 'feliz';

  usuarios =  [
    {
      id: 0,
      nome: 'Welber'
    },
    {
      id: 1,
      nome: 'Henrique'
    }
  ]

  @Input() titulo: string = '';

  @Output() textoEmit = new EventEmitter<string>();




  emitirValor(){
    this.textoEmit.emit('Texto do filho');
  }

  retornarTitulo(){
    return 'Welber';
  }

  atualizarTitulo(){
    this.estiloCor = 'red';
    this.aplicarClasse = !this.aplicarClasse;
    console.log(this.valorInput)
  }
}
