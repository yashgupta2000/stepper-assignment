export const checkValidate = (name, email, phone) => {
    const error = {};
    const isEmail = /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/.test(email);
    const isPhone = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
    const isName = /^[A-Za-z\s]+$/.test(name);
    
    if (!isName || name.length === 0) error.name = 'Name is not valid!';
    if (!isPhone || name.length === 0) error.phone = 'Phone is not valid!';

    if (!isEmail || name.length === 0) error.email = 'Email is not valid!';

    if (Object.keys(error).length > 0) {
        return error;
    }
    return null;





}