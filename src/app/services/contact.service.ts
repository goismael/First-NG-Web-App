import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact = {
    name: "Ismael Ouedraogo",
    email: "ismael@ismaelo.com",
    tel: "(111) 222-3333"
  }

   getContact(){
    return this.contact;
  }

  constructor() { }

}
