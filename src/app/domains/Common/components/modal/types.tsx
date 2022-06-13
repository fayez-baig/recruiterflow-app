import { ReactNode } from 'react';

export interface ModalProps {
    toggle: () => void;
    children: ReactNode;
    handleSave?: () => void;
}
