import { useQuery } from 'react-query';
import { getContacts } from 'app/queries';
import { IContact } from 'app/kernel/types';

export const useGetContacts = () =>
    useQuery<IContact[], Error>(`all-contacts`, () => getContacts(), {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
    });
