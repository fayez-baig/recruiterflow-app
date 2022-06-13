import { Modal } from 'app/domains/Common/components/modal';
import { Button } from 'app/domains/Common/components/ui';
import { FC, useState } from 'react';

const HomePage: FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button
                className="!rounded-full !p-0 w-16 h-16 !bg-white bottom-4 absolute right-4 text-2xl"
                onClick={() => setShowModal((prev) => !prev)}
            >
                ➕
            </Button>
            {showModal && <Modal toggle={() => setShowModal((prev) => !prev)}>Contact form</Modal>}
        </>
    );
};

export default HomePage;
