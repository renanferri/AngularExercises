import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Contact, ContactCreate, ContactUpdate } from "../models/contact.model";


@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private baseApi = `${environment.api}/contacts`;

    constructor(
        private httpClient: HttpClient
    )
    {   
    }

    get() {
        return this.httpClient.get<Contact[]>(this.baseApi);
    }

    create(person: ContactCreate){
        return this.httpClient.post<Contact>(this.baseApi, person);
    }

    edit(person: ContactUpdate) {
        return this.httpClient.put<Contact>(`${this.baseApi}/${person.id}`, person);
    }

    remove(id: Number) {
        return this.httpClient.delete<void>(`${this.baseApi}/${id}`);
    }
}