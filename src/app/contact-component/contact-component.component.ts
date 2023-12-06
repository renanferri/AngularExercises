import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { PersonOptions } from '../models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})
export class ContactComponentComponent {
  contacts$ = new Observable<Contact[]>();
  
  options$ = new Observable<PersonOptions[]>();
  
  // form
  id:string = '';
  name:string = '';
  email:string = '';
  whatsapp:string = '';
  personSelectedOption: any;

  constructor(
    private contactService: ContactService,    
    private personService: PersonService    
  ) {
    this.listContacts();
    this.listPersonOptions();    
  }

  listPersonOptions() {
    this.options$ = this.personService.get();
  }

  onOptionSelected() {    
    this.personSelectedOption = this.personSelectedOption;
  }

  listContacts() {    
    this.contacts$ = this.contactService.get();
  }

  buttonClick() {
    if (!this.name || !this.email || !this.whatsapp)
      return;    

    if (this.id) {
      this.updateContact();
      return;
    }

    this.contactService.create({ name: this.name, email: this.email, whatsapp: this.whatsapp, person_id: parseInt(this.personSelectedOption)})
      .subscribe(() => this.listContacts())
  }

  updateContact(){
    this.contactService.edit({ 
      id: parseInt(this.id), name: this.name, email: this.email,  whatsapp: this.whatsapp, person_id: parseInt(this.personSelectedOption) })
    .subscribe(() => this.listContacts());
  }

  editFields(contact: Contact) {
    this.id = contact.id!.toString();
    this.name = contact.name;
    this.email = contact.email;
    this.whatsapp = contact.whatsapp;    
    this.personSelectedOption = contact.person_id.toString();    
  }

  removeContact(id: number){

    const isConfirmed = window.confirm("Are you sure you want to remove this Contact?");

    if (isConfirmed) {
      this.contactService.remove(id)
        .subscribe(() => this.listContacts());
    }

  }
}
