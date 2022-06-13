import { useMutation } from 'react-query';
import { addContact } from 'app/queries';
import { IContact } from '../../../../kernel/types';

export const useAddContact = () => useMutation((values: IContact) => addContact(values));
