import { FC, useState } from 'react';
import { FormContainerProps } from './types';
import { Modal } from 'app/domains/Common/components/modal';
import { Form } from 'app/domains/Common/components/form';

const FormContainer: FC<FormContainerProps> = ({ showModal, toggle }) => {
    const [formValues, setFormValues] = useState<{
        [x: string]: string;
    }>({
        fullName: '',
        contactNo: '',
    });
    // const [formErros, setFormErros] = useState({});

    const handleSubmit = () => {
        // eslint-disable-next-line no-console
        console.log(formValues);
    };
    return (
        <>
            {showModal && (
                <Modal toggle={toggle} handleSave={handleSubmit}>
                    <Form formValues={formValues} setFormValues={setFormValues} />
                </Modal>
            )}
        </>
    );
};

export default FormContainer;
