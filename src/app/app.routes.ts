import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

export const routes: Routes = [
{ path: 'header', component: HeaderComponent},
{ path: 'content', component: ContentComponent},
];
