import * as Yup from "yup";
const phoneRegExp = /^(\+92)?(0)?(3)[0-9]{9}$/;
const cnicRegExp = /^[0-7]{5}-[0-9]{7}-[0-9]{1}$/;
//const phoneRegExp = /^(03)[0-9]{9}$/;

export const RegistrationSchema=Yup.object({
    full_name:Yup.string().min(2).max(25).required("Please enter your Full Name"),
    user_name:Yup.string().min(2).max(10).matches(/^[a-zA-Z]/, "Username must start with a letter")
    .required("Username is required"),
    phone_no:Yup.string().matches(phoneRegExp, 'Please enter a valid Pakistan Phone Number')
    .required('Phone Number is required'),
    type:Yup.string().required("please Select Type"),
    cnic:Yup.string().matches(cnicRegExp, 'Please enter a valid Pakistan CNIC Number')
    .required('CNIC number is required'),
    email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(8, "Password must be at least 8 characters long")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  )
  .required("Password is required"),
})
