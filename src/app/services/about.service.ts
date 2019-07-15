import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AboutService {
  info = {
    name: "Ismael Ouedraogo",
    email: "ismael@ismaelo.com",
    tel: "(111) 222-3333"
  }

  comments = [
    {date:new Date(), message: "A"},
    {date:new Date(), message: "B"},
    {date:new Date(), message: "C"},
  ];
addComment(c){
  this.comments.push(c);
}

getAllComments(){
  return this.comments;
}
getInfo(){
  return this.info;  
}


  constructor() { }
}
