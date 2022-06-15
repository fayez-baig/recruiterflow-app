/* eslint-disable no-console */
import { SuspenseLoader } from 'app/domains/Common/components/loaders';
import { useGetContacts } from 'app/domains/hooks/queries-hooks/useGetContacts/useGetContact';
import { FC, useState, useEffect } from 'react';
import { transformData } from 'utils/transformData';
import { Card } from '../../components/card';
import { ContactGridProps } from './types';
import { IContact } from 'app/kernel/types';
import { useDeleteContact } from '../../../hooks/queries-hooks/useDeleteContact/useDeleteContact';
import { queryClient } from 'app/app-main';

const ContactGrid: FC<ContactGridProps> = () => {
    const { data, isLoading, isError } = useGetContacts();
    const { mutate, isLoading: loading } = useDeleteContact();
    const [contactData, setContactData] = useState<IContact[]>([]);

    // @ts-ignore
    console.log(data?.data && Object.keys(data?.data));

    useEffect(() => {
        if (!loading) {
            queryClient.fetchQuery('all-contacts');
        }
    }, [loading]);

    useEffect(() => {
        if (data?.data && !isError && !isLoading && !isLoading) {
            const contactData = transformData(data?.data);
            // @ts-ignore
            console.log(contactData);
            setContactData(contactData);
        } else setContactData([]);
    }, [data?.data, isError, isLoading, loading]);

    if (isLoading || loading) return <SuspenseLoader />;

    if (isError)
        return (
            <div className="flex items-center justify-center h-screen text-indigo-500">
                Something went wrong !!
            </div>
        );

    if (!contactData.length)
        return (
            <div className="flex items-center justify-center h-screen text-red-500">
                No Contact Found !!
            </div>
        );

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
            {contactData.map(({ fullName, designation, id }) => (
                <Card
                    key={id}
                    id={id}
                    fullName={fullName}
                    designation={designation}
                    handleDelete={() => mutate(id || '')}
                />
            ))}
        </div>
    );
};

export default ContactGrid;
