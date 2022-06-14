import { IFormState, IFormErrorState } from 'app/kernel/types';
import { Dispatch, SetStateAction } from 'react';

export interface FormProps {
    formValues: IFormState;
    setFormValues: Dispatch<SetStateAction<IFormState>>;
    formErrors: IFormErrorState;
    setFormErrors: Dispatch<SetStateAction<IFormErrorState>>;
}
