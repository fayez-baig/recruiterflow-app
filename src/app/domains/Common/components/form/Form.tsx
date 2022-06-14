import { FC } from 'react';
import { Input } from '../ui';
import { FormProps } from './types';

const formFields = [
    {
        label: 'Name',
        name: 'fullName',
        placeHolder: 'Enter Your Name',
    },

    {
        label: 'Contact No',
        name: 'contactNo',
        placeHolder: 'Enter Your Contact No',
    },
];

const Form: FC<FormProps> = ({ formValues, setFormValues }) => {
    return (
        <>
            {formFields.map(({ label, name, placeHolder }) => (
                <Input
                    label={label}
                    key={name}
                    autocomplete="off"
                    name={name}
                    type="text"
                    value={formValues[name]}
                    onChange={(e) =>
                        setFormValues((prev) => ({
                            ...prev,
                            [name]: e.target.value,
                        }))
                    }
                    placeholder={placeHolder}
                    withIcon
                    className="mt-1"
                />
            ))}
        </>
    );
};

export default Form;
