import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloWorld/helloWorld.component'
import { MinhaPaginaComponent } from './minha-pagina/minha-pagina.component'

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MinhaPaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
