import FormContainer from 'app/domains/Common/components/form-container/FormContainer';
import { FC, useState } from 'react';
import { Button } from 'app/domains/Common/components/ui';
import { ContactGrid } from 'app/domains/Home/containers/ContactGrid';

const HomePage: FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <ContactGrid />
            <Button
                className="!rounded-full !p-0 w-16 h-16 !bg-white bottom-4 absolute right-4 text-2xl"
                onClick={() => setShowModal((prev) => !prev)}
            >
                ➕
            </Button>
            <FormContainer showModal={showModal} toggle={() => setShowModal((prev) => !prev)} />
        </>
    );
};

export default HomePage;
