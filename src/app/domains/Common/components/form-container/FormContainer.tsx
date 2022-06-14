import { FC, useState } from 'react';
import { FormContainerProps } from './types';
import { IFormState } from 'app/kernel/types';
import { Modal } from 'app/domains/Common/components/modal';
import { Form } from 'app/domains/Common/components/form';
import { handleValidate } from 'utils/validation';
import { useAddContact } from 'app/domains/hooks/queries-hooks';
import { generateRandomId } from '../../../../../utils/generateRandomId';

const FormContainer: FC<FormContainerProps> = ({ showModal, toggle }) => {
    const [formValues, setFormValues] = useState<IFormState>({
        fullName: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const { mutate } = useAddContact();

    const handleSubmit = () => {
        const isValid = handleValidate(formValues, setFormErrors);
        // eslint-disable-next-line no-console
        console.log(formValues, formErrors, generateRandomId(), isValid);
        if (!Object.keys(formErrors).length && isValid) {
            const values = { id: generateRandomId(), ...formValues };
            mutate(values);
            // eslint-disable-next-line no-console
            console.log(formValues, formErrors, generateRandomId(), values);
            toggle();
        }
    };
    return (
        <>
            {showModal && (
                <Modal toggle={toggle} handleSave={handleSubmit}>
                    <Form
                        formValues={formValues}
                        setFormValues={setFormValues}
                        formErrors={formErrors}
                        setFormErrors={setFormErrors}
                    />
                </Modal>
            )}
        </>
    );
};

export default FormContainer;
