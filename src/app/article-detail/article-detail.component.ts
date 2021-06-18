import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: Article = { } as Article;

  constructor(private router: Router, private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.article = this.articleService.getArticleById(Number(id));
    // debugger;
  }

  backToArticleList() {
    this.router.navigateByUrl("");
  }
}
