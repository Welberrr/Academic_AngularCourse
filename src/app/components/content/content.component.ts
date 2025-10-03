import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet, HeaderComponent, ContentComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  readonly _storageService = inject(StorageService);
}
