export const handleValidate = (formValues, setFormErrors) => {
    if (!String(formValues.fullName).length) {
        setFormErrors(() => ({
            fullName: 'Name cannot be blank',
        }));
        return false;
    } else if (String(formValues.fullName).length <= 3) {
        setFormErrors(() => ({
            fullName: 'Name must be greater than 3 characters',
        }));
        return false;
    }
    if (!String(formValues.designation).length) {
        setFormErrors(() => ({
            designation: 'Designation cannot be blank',
        }));
        return false;
    } else if (String(formValues.designation).length <= 3) {
        setFormErrors(() => ({
            designation: 'Designation must be greater than 3 characters',
        }));
        return false;
    } else {
        setFormErrors({});
        return true;
    }
};
