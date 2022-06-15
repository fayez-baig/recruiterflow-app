export interface IContact {
    id?: string;
    fullName?: string;
    designation?: string;
}

export interface IContactState {
    [x: string]: IContact;
}

export interface QueryResult {
    data: IContact[];
}

export interface IFormState {
    [x: string]: string | number;
}

export interface IFormErrorState {
    [x: string]: string;
}
