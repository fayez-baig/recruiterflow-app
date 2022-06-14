export interface IContact {
    id: string;
    fullName?: string;
}

export interface IFormState {
    [x: string]: string | number;
}

export interface IFormErrorState {
    [x: string]: string;
}
