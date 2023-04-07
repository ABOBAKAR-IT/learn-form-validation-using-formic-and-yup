import * as Yup from "yup";

export const RegistrationSchema=Yup.object({
    full_name:Yup.string().required("Please enter your name"),
    user_name:Yup.string().required("Please enter your name"),
    phone_no:Yup.string().required("Please enter your name"),
    type:Yup.string().required("please Select type"),
    cnic:Yup.string().required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
})
