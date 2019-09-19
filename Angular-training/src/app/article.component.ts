import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ArticleService } from './article.service';
import { Article } from './article';
import { Router } from '@angular/router';
import { Length } from './length';
import { ArctService } from './arct.service';
import { user } from './user.model';


@Component({
   selector: 'app-article',
   templateUrl: './article.component.html',
   styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit { 
   //Component properties
   allArticles: Article[];
   statusCode: number;
   lengthobj: Length;
   requestProcessing = false;
   articleIdToUpdate = null;
   processValidation = false;
   maxx :String;
   minn:String;
   info: Length=new Length();
   //Create form
   articleForm = new FormGroup({
       title: new FormControl('', Validators.required,Validators.maxLength[this.info.max]),
       category: new FormControl('', Validators.required),
       authorName: new FormControl('', Validators.required) ,
       tags: new FormControl('', Validators.required)  
   });
   //Create constructor to get service instance
   constructor(private router: Router,private articleService: ArticleService,private arctService: ArctService) {
   }
   //Create ngOnInit() and and load articles
   ngOnInit(): void {
      this.getAllArticles();
      this.getLength();
    
   }   
   
   //Fetch all articles
   getAllArticles() {
        this.articleService.getAllArticles()
		  .subscribe(
                data => this.allArticles = data,
                errorCode =>  this.statusCode = errorCode);   

              
   }
 
   getLength()
   {
      this.arctService.getLength1().subscribe(
         (data) =>  { this.info=data;

console.log(this.info.max);
console.log(this.info.min);
this.maxx = this.info.max;
this.minn=this.info.min;
         });
      //   this.maxx = this.lengthobj.max;
   }
 /*  getValid() {
      this.articleService.getValid()
      .subscribe(
         data => this.lll = data,

         errorCode =>  this.statusCode = errorCode
         
      );
    
      console.log(this.lll.max);

   } */


   //Handle create and update article
   onArticleFormSubmit() {
	  this.processValidation = true;   
	  if (this.articleForm.invalid) {
	       return; //Validation failed, exit from method.
     }   
     

	  //Form is valid, now perform create or update
      this.preProcessConfigurations();
	  let title = this.articleForm.get('title').value.trim();
      let category = this.articleForm.get('category').value.trim();	
      let authorName= this.articleForm.get('authorName').value.trim();	
      let tags = this.articleForm.get('tags').value.trim();	
      
      
	  if (this.articleIdToUpdate === null) {  
	    //Handle create article
	    let article= new Article(null, title, category, authorName,tags);	  
	    this.articleService.createArticle(article)
	      .subscribe(successCode => {
		            this.statusCode = successCode;
				    this.getAllArticles();	
					this.backToCreateArticle();
			    },
		        errorCode => this.statusCode = errorCode);
	  } else {  
   	    //Handle update article
       let article= new Article(this.articleIdToUpdate, title, category, authorName,tags);	  
      
	    this.articleService.updateArticle(article)
	      .subscribe(successCode => {
		            this.statusCode = successCode;
				    this.getAllArticles();	
					this.backToCreateArticle();
			    },
		        errorCode => this.statusCode = errorCode);	  
	  }
   }


   //Load article by id to edit
   loadArticleToEdit(articleId: string) {
      this.preProcessConfigurations();
      this.articleService.getArticleById(articleId)
	      .subscribe(article => {
		            this.articleIdToUpdate = article.articleId;   
		            this.articleForm.setValue({ title: article.title, category: article.category,authorName: article.authorName,tags: article.tags });
					this.processValidation = true;
					this.requestProcessing = false;   
		        },
		        errorCode =>  this.statusCode = errorCode);   
   }


   //Delete article
   deleteArticle(articleId: string) {
      this.preProcessConfigurations();
      this.articleService.deleteArticleById(articleId)
	      .subscribe(successCode => {
		            this.statusCode = successCode;
				    this.getAllArticles();	
				    this.backToCreateArticle();
			    },
		        errorCode => this.statusCode = errorCode);    
   }


   //Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
	  this.requestProcessing = true;   
   }

   //Go back from update to create
   backToCreateArticle() {
      this.articleIdToUpdate = null;
      this.articleForm.reset();	  
	  this.processValidation = false;
   }
}
    