import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact: any;
  constructor(private contactservice: ContactService) {
    this.contact = this.contactservice.getContact();
   }
  

  ngOnInit() {
  }

}
