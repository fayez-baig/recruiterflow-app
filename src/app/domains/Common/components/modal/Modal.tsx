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
                        <div className="items-center sm:flex sm:items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                📝
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-1 pb-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <Button
                            className="sm:flex sm:w-auto"
                            onClick={() => {
                                toggle();
                                handleSave?.();
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
