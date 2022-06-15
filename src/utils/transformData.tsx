export const transformData = (data): any[] => {
    if (Object.keys(data).length) {
        const keys = Object.keys(data);
        const contactList = keys.map((key) => ({
            ...data[key],
        }));

        return contactList.map((item) => Object.values(item)[0]);
    }
    return [];
};
