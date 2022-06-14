import { IFormState } from 'app/kernel/types';
import { Dispatch, SetStateAction } from 'react';

export interface FormProps {
    formValues: IFormState;
    setFormValues: Dispatch<SetStateAction<IFormState>>;
}
