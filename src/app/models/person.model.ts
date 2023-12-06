export type Person = {
    id: number,
    name: string,
    birth_date: string   
}

export type PersonCreate = Omit<Person, 'id'>;

export type PersonOptions = Omit<Person, 'birth_dated'>;