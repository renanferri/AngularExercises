import { Person } from "./person.model";

export type Contact = {
    id: number,
    name: string,
    email: string,
    whatsapp: string,
    person_id: number,
    person: Person
}

export type ContactCreate = Omit<Contact, 'id' | 'person'>;
export type ContactUpdate = Omit<Contact, 'person'>;