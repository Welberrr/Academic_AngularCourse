import { Component } from '@angular/core';
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

  retornarTitulo(){
    return 'Welber';
  }

  atualizarTitulo(){
    this.estiloCor = 'red';
    this.aplicarClasse = !this.aplicarClasse;
    console.log(this.valorInput)
  }
}
