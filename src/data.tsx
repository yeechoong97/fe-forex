import { AccountCredentials, UserDetails } from "./interfaces"

const RegistrationSteps: string[] = ["Personal", "Credentials", "Success"];

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
}

export { InitialAccountRegister, InitialAccountLogin, RegistrationSteps, ERROR_MESSAGE }