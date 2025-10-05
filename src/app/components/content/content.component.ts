import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
 usuarioForm = new FormGroup({
  name: new FormControl('Welber', [Validators.required]),
 });

 enviarFormulario() {
    console.log('Formulario', this.usuarioForm);
 }
}