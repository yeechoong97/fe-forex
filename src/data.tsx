import { AccountCredentials, PriceProps, UserDetails } from "./interfaces"

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

const NavigationNames = ["Account", "Tutorial", "Calculator", "Forum", "Chat"]

const ERROR_MESSAGE = {
    "INCOMPLETE_FIELD": "Please input all the fields",
    "INVALID_EMAIL": "Please enter valid email address",
    "INVALID_PHONE": "Please enter valid phone number",
    "INVALID_ACCOUNT": "Invalid username / password",
    "INVALID_PASSWORD": "Password and Confirm password are different"
}

const DUMMY_DATA: PriceProps[] = [
    {
        instrument: "EUR/USD",
        sell: 1233.33,
        buy: 1234.55,
        pips: 0.11
    },
    {
        instrument: "AUD/USD",
        sell: 1233.33,
        buy: 1234.55,
        pips: 0.11
    },
    {
        instrument: "USD/JPY",
        sell: 1233.33,
        buy: 1234.55,
        pips: 0.11
    },
    {
        instrument: "GBP/USD",
        sell: 1233.33,
        buy: 1234.55,
        pips: 0.11
    },
    {
        instrument: "EUR/JPY",
        sell: 1233.33,
        buy: 1234.55,
        pips: 0.11
    }

]

export { InitialAccountRegister, InitialAccountLogin, RegistrationSteps, ERROR_MESSAGE, emailRegex, phoneRegex, NavigationNames, DUMMY_DATA }