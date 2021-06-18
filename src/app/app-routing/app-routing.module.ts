import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from '../article-list/article-list.component'
import { CreateArticleComponent } from '../create-article/create-article.component'
import { LoginComponent } from '../login/login.component'
import { ArticleDetailComponent } from '../article-detail/article-detail.component'
import { AuthGuardGuard } from '../auth-guard/auth-guard.guard';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'create', component: CreateArticleComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
