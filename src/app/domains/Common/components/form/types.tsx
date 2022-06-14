import { Dispatch, SetStateAction } from 'react';

export interface FormProps {
    formValues: {
        [x: string]: string;
    };
    setFormValues: Dispatch<
        SetStateAction<{
            [x: string]: string;
        }>
    >;
}
