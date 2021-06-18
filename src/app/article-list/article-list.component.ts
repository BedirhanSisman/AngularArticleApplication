import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { AuthGuardService } from '../auth-guard/auth-guard.service';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  isListEmpty = true;

  constructor(private articleService: ArticleService, private router: Router, private authGuardService: AuthGuardService) { }

  ngOnInit(): void {
    // this.logout(); // For testing protection create page
    this.getCurrent();
  }

  addArticle() {
    this.router.navigate(['create']);
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article);

    this.getCurrent();
  }

  viewArticle(article: Article) {
    this.router.navigate(['article/' + article.id]);
  }

  getCurrent() {
    this.articles = this.articleService.getArticles();
    this.controlListIsEmpty();
  }

  controlListIsEmpty() {
    if(this.articles.length != 0) {
      this.isListEmpty = false;
    } else {
      this.isListEmpty = true;
    }
  }

  logout() {
    this.authGuardService.logout();
  }

}
