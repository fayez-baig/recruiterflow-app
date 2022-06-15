import { useQuery } from 'react-query';
import { getContacts } from 'app/queries';
import { QueryResult } from 'app/kernel/types';

export const useGetContacts = () =>
    useQuery<QueryResult, Error>(`all-contacts`, () => getContacts(), {
        refetchOnWindowFocus: false,
    });
