import { FC } from 'react';
import { Button } from '../ui';
import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({ toggle, children, handleSave }) => {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div
                        className="absolute inset-0 bg-black opacity-5"
                        onClick={() => toggle()}
                    ></div>
                </div>
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div
                    className="inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-light-mode-content-bg dark:bg-dark-mode sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="flex flex-col items-center sm:flex sm:items-start">
                            <div className="flex items-center justify-center">
                                📝 <span className="ml-4"> Contact Form</span>
                            </div>
                            <div className="mt-1 ml-8 text-center sm:mt-1 sm:ml-8 sm:text-left">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-1 pb-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <Button
                            type="submit"
                            className="sm:flex sm:w-auto"
                            onClick={() => {
                                handleSave?.();
                                toggle();
                            }}
                        >
                            Save
                        </Button>

                        <Button className="mr-7 sm:flex sm:w-auto" onClick={toggle}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
