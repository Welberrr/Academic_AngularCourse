import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  imports: [FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  nomeUsuario = '';

  enviarFormulario(userForm: any){
    console.log('Finalizado: ', this.nomeUsuario, userForm);
  }
}