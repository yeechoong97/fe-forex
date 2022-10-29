import { AccountCredentials, UserDetails } from "./interfaces"

const RegistrationSteps: string[] = ["Personal", "Credentials", "Success"];
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^[0-9]+$/;

const InitialAccountRegister: UserDetails = {
    username: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
}

const InitialAccountLogin: AccountCredentials = {
    username: "",
    password: "",
}

const ERROR_MESSAGE = {
    "INCOMPLETE_FIELD": "Please input all the fields",
    "INVALID_EMAIL": "Please enter valid email address",
    "INVALID_PHONE": "Please enter valid phone number",
    "INVALID_ACCOUNT": "Invalid username / password",
    "INVALID_PASSWORD": "Password and Confirm password are different"
}

export { InitialAccountRegister, InitialAccountLogin, RegistrationSteps, ERROR_MESSAGE, emailRegex, phoneRegex }