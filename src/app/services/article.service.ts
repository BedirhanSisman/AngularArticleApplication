import { Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[] = [];

  constructor() { 
    // Adding mock datas for global articles array.

    /*
    this.articles.push(
      {
        id: 1,
        title: 'Article 1',
        excerpt: 'Article Excerpt 1',
        publishedDate: new Date(),
        article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    );

    this.articles.push(
      {
        id: 2,
        title: 'Article 2',
        excerpt: 'Article Excerpt 2',
        publishedDate: new Date(),
        article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    );
    */
  }

  getArticles(): Article[] {
    return this.articles;
  }

  addArticle(article: Article) {
    this.articles.push(article);
  }

  deleteArticle(article: Article) {
    let index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
  }

  getArticleById(id: number): Article {
    let article = this.articles.filter( article => article.id === id )[0];

    return article;
  }
}
