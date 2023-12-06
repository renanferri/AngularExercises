import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Person, PersonCreate } from "../models/person.model";

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    private baseApi = `${environment.api}/persons`;

    constructor(
        private httpClient: HttpClient
    )
    {   
    }

    get() {
        return this.httpClient.get<Person[]>(this.baseApi);
    }

    create(person: PersonCreate){
        return this.httpClient.post<Person>(this.baseApi, person);
    }

    edit(person: Person) {
        return this.httpClient.put<Person>(`${this.baseApi}/${person.id}`, person);
    }

    remove(id: Number) {
        return this.httpClient.delete<void>(`${this.baseApi}/${id}`);
    }
}