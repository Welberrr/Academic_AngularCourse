import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { StorageService } from '../../services/storage.service';
import { IPost, JsonPlaceholderService } from '../../services/json-placeholder.service';
import { response } from 'express';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet, HeaderComponent, ContentComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
postsList: IPost[]= [];

 readonly _jsonPlaceholderService = inject(JsonPlaceholderService);

 ngOnInit(){
  this._jsonPlaceholderService.getPosts().subscribe(
    (response)=> {console.log('response: ', response);
    this.postsList = response;
    }
  )
 }
}
