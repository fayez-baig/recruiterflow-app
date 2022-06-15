import { FC, useState, useEffect } from 'react';
import { FormContainerProps } from './types';
import { IFormState } from 'app/kernel/types';
import { Modal } from 'app/domains/Common/components/modal';
import { Form } from 'app/domains/Common/components/form';
import { SuspenseLoader } from '../loaders';
import { handleValidate } from 'utils/validation';
import { useAddContact } from 'app/domains/hooks/queries-hooks';
import { queryClient } from 'app/app-main';
import { generateRandomId } from 'utils/generateRandomId';

const FormContainer: FC<FormContainerProps> = ({ showModal, toggle }) => {
    const [formValues, setFormValues] = useState<IFormState>({
        fullName: '',
        designation: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const { mutate, isLoading } = useAddContact();

    useEffect(() => {
        if (!isLoading) {
            queryClient.fetchQuery('all-contacts');
        }
    }, [isLoading]);
    if (isLoading) return <SuspenseLoader />;

    const handleSubmit = () => {
        const isValid = handleValidate(formValues, setFormErrors);
        if (!Object.keys(formErrors).length && isValid) {
            const values = { id: generateRandomId(), ...formValues };
            mutate(values);
            toggle();
            setFormValues({
                fullName: '',
                designation: '',
            });
            setFormErrors({});
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
