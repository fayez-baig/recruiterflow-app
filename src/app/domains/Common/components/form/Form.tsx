import { FC } from 'react';
import { Input } from '../ui';
import { FormProps } from './types';
import { handleValidate } from 'utils/validation';
import { formFields } from 'utils/formFields';

const Form: FC<FormProps> = ({ formValues, setFormValues, setFormErrors, formErrors }) => {
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
                    onChange={(e) => {
                        handleValidate(formValues, setFormErrors);
                        setFormValues((prev) => ({
                            ...prev,
                            [name]: e.target.value,
                        }));
                    }}
                    placeholder={placeHolder}
                    withIcon
                    className="mt-1"
                    error={formErrors[name]}
                />
            ))}
        </>
    );
};

export default Form;
