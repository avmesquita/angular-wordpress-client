import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordpressPostsComponent } from './components/wordpress-posts/wordpress-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordpressPagesComponent } from './components/wordpress-pages/wordpress-pages.component';


@NgModule({
  declarations: [
    WordpressPostsComponent,
    WordpressPagesComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    WordpressPostsComponent,
    WordpressPagesComponent
  ]
})
export class SharedModule { }
