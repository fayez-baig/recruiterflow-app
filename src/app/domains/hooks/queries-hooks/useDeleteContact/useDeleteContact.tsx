import { useMutation } from 'react-query';
import { deleteContact } from 'app/queries';

export const useDeleteContact = () => useMutation((id: string) => deleteContact(id));
