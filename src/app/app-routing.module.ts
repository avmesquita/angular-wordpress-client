import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordpressCategoriesComponent } from './modules/shared/components/wordpress-categories/wordpress-categories.component';
import { WordpressCommentsComponent } from './modules/shared/components/wordpress-comments/wordpress-comments.component';
import { WordpressMediaComponent } from './modules/shared/components/wordpress-media/wordpress-media.component';
import { WordpressPagesComponent } from './modules/shared/components/wordpress-pages/wordpress-pages.component';
import { WordpressPluginsComponent } from './modules/shared/components/wordpress-plugins/wordpress-plugins.component';
import { WordpressPostsComponent } from './modules/shared/components/wordpress-posts/wordpress-posts.component';
import { WordpressSettingsComponent } from './modules/shared/components/wordpress-settings/wordpress-settings.component';
import { WordpressStatusesComponent } from './modules/shared/components/wordpress-statuses/wordpress-statuses.component';
import { WordpressTagsComponent } from './modules/shared/components/wordpress-tags/wordpress-tags.component';
import { WordpressThemesComponent } from './modules/shared/components/wordpress-themes/wordpress-themes.component';
import { WordpressTypesComponent } from './modules/shared/components/wordpress-types/wordpress-types.component';
import { WordpressUsersComponent } from './modules/shared/components/wordpress-users/wordpress-users.component';

const routes: Routes = [
  { 
    path: 'posts',
    component: WordpressPostsComponent,
  },
  { 
    path: 'categories',
    component: WordpressCategoriesComponent,
  },
  { 
    path: 'comments',
    component: WordpressCommentsComponent,
  },
  { 
    path: 'medias',
    component: WordpressMediaComponent,
  },
  { 
    path: 'pages',
    component: WordpressPagesComponent,
  },
  { 
    path: 'plugins',
    component: WordpressPluginsComponent,
  },
  { 
    path: 'settings',
    component: WordpressSettingsComponent,
  },
  { 
    path: 'statuses',
    component: WordpressStatusesComponent,
  },
  { 
    path: 'tags',
    component: WordpressTagsComponent,
  },
  { 
    path: 'themes',
    component: WordpressThemesComponent,
  },
  { 
    path: 'types',
    component: WordpressTypesComponent,
  },
  { 
    path: 'users',
    component: WordpressUsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
