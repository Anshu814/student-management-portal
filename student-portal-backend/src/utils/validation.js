const  phoneRegex = /^\d{10}$/;
const validatePhone = (phoneNumber) =>{
    return phoneNumber && phoneRegex.test(phoneNumber)
}
export default validatePhone;
