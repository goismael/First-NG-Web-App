import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
 
  info:any;
  comments=[];
 comment = {date:null, message:" "};

  constructor(private aboutService:AboutService) { 
    this.info=this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments();
  }

  ngOnInit() {
  }

  onAddComment(c){
    this.aboutService.addComment(c);
    c.date = new Date();
    this.comments=this.aboutService.getAllComments();
    this.comments.push(c);
    this.comment.message="";
  }
}
