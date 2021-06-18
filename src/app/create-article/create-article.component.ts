import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  title = '';
  excerpt = '';
  publishedDate: Date;
  article = '';

  constructor(private articleService: ArticleService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  createArticle() {
    if(this.customFormValidator() == 'S') {
      this.articleService.addArticle(
        {
          id: Date.now(),
          title: this.title,
          excerpt: this.excerpt,
          publishedDate: this.publishedDate,
          article: this.article
        }
      );

      this.alertify.success('Submission successful');

      this.router.navigate(['']);
    } else {
      this.alertify.error('Make sure all fields are filled');

      switch(this.customFormValidator()) { 
        case 'T': { 
           this.alertify.error('Enter a Title');
           break; 
        } 
        case 'E': { 
          this.alertify.error('Enter an Excerpt');
           break; 
        } 
        case 'P': { 
          this.alertify.error('Select a Date');
           break; 
        } 
        case 'A': { 
          this.alertify.error('Enter an Article');
           break; 
        }  
     } 
    }
  }

  customFormValidator(): string {
    if(this.title.trim() == '') return 'T';
    if(this.excerpt.trim() == '') return 'E';
    if(this.publishedDate == undefined || this.publishedDate == null) return 'P';
    if(this.article.trim() == '') return 'A';
    return 'S';
  }

  backToArticleList() {
    this.router.navigateByUrl("");
  }

}
