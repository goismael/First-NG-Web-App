import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  info = {
    name: "Ismael Ouedraogo",
    email: "ismael@ismaelo.com",
    tel: "(216) 904-9831"
  }

  comments = [
    {date:new Date(), message: "A"},
    {date:new Date(), message: "B"},
    {date:new Date(), message: "C"},
  ];

 // comment = {date:null, message:" "};

  constructor() { }

  ngOnInit() {
  }

}
