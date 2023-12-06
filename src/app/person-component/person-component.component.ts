import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',
  styleUrls: ['./person-component.component.scss']
})

export class PersonComponentComponent {

  persons$ = new Observable<Person[]>();

  // form
  id:string = '';
  name:string = '';
  birth_date:string = '';
  

  constructor(
    private personService: PersonService    
  ) {
    this.listPersons();    
  }

  listPersons() {    
    this.persons$ = this.personService.get();
  }

  buttonClick() {
    if (!this.name || !this.birth_date)
      return;    

    if (this.id) {
      this.updatePerson();
      return;
    }

    this.personService.create({ name: this.name, birth_date: this.birth_date})
      .subscribe(() => this.listPersons())
  }

  updatePerson(){
    this.personService.edit({ 
      id: parseInt(this.id), name: this.name, birth_date: formatDate(this.birth_date, 'yyyy-MM-dd', 'en-US') })
    .subscribe(() => this.listPersons());
  }

  editFields(person: Person) {
    this.id = person.id!.toString();
    this.name = person.name;    
    this.birth_date = formatDate(person.birth_date, 'MM/dd/yyyy', 'en-US');
  }

  removePerson(id: number){

    const isConfirmed = window.confirm("Are you sure you want to remove this Person? All contacts of this Person will be removed too!");

    if (isConfirmed) {
      this.personService.remove(id)
        .subscribe(() => this.listPersons());
    }
  }
}
