import { axiosInstance } from 'app/axios/axios-instance';
import { IContact } from 'app/kernel/types';

const getContacts = async (): Promise<IContact[]> => await axiosInstance.get('contacts.json');

const addContact = async (values: IContact): Promise<string> =>
    await axiosInstance.post(`contacts/${values.id}.json`, values);

const deleteContact = async (id: string): Promise<null> =>
    await axiosInstance.delete(`contacts/${id}.json`);

export { getContacts, addContact, deleteContact };
