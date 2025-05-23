export const validateEmail = (email) => {
    const regex = /^[^\5@]+@[^\5@]+\.[^\5@]+$/;
    return regex.test(email);
};