import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordpressPostsComponent } from './components/wordpress-posts/wordpress-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordpressPagesComponent } from './components/wordpress-pages/wordpress-pages.component';
import { WordpressCategoriesComponent } from './components/wordpress-categories/wordpress-categories.component';
import { WordpressTagsComponent } from './components/wordpress-tags/wordpress-tags.component';
import { WordpressCommentsComponent } from './components/wordpress-comments/wordpress-comments.component';
import { WordpressMediaComponent } from './components/wordpress-media/wordpress-media.component';
import { WordpressTypesComponent } from './components/wordpress-types/wordpress-types.component';
import { WordpressStatusesComponent } from './components/wordpress-statuses/wordpress-statuses.component';
import { WordpressSettingsComponent } from './components/wordpress-settings/wordpress-settings.component';
import { WordpressUsersComponent } from './components/wordpress-users/wordpress-users.component';
import { WordpressThemesComponent } from './components/wordpress-themes/wordpress-themes.component';
import { WordpressPluginsComponent } from './components/wordpress-plugins/wordpress-plugins.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [
    WordpressPostsComponent,
    WordpressPagesComponent,
    WordpressCategoriesComponent,
    WordpressTagsComponent,
    WordpressCommentsComponent,
    WordpressMediaComponent,
    WordpressTypesComponent,
    WordpressStatusesComponent,
    WordpressSettingsComponent,
    WordpressUsersComponent,
    WordpressThemesComponent,
    WordpressPluginsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    WordpressPostsComponent,
    WordpressPagesComponent,
    WordpressCategoriesComponent,
    WordpressTagsComponent,
    WordpressCommentsComponent,
    WordpressMediaComponent,
    WordpressTypesComponent,
    WordpressStatusesComponent,
    WordpressSettingsComponent,
    WordpressUsersComponent,
    WordpressThemesComponent,
    WordpressPluginsComponent
  ],
  providers: [
    
  ]

})
export class SharedModule { }
