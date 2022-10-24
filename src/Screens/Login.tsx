import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import TextBox from '../Components/TextBox'
import { AccountCredentials, ErrorMessageType } from '../interfaces'

const ErrorMessage: FunctionComponent<ErrorMessageType> = ({ content }) => (
    <div className="justify-center flex">
        <div className='w-1/2 mt-1 px-3 py-2 bg-red-100 border shadow-sm border-red-300 placeholder-red-400 text-red-400 text-xs block rounded-md sm:text-xs focus:ring-1'>
            {content}
        </div>
    </div>
)

const InitialAccount: AccountCredentials = {
    username: "",
    password: "",
}

export const Login = () => {

    const [error, setError] = useState(false);
    const [account, setAccount] = useState<AccountCredentials>(InitialAccount);

    const setAction = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        const existingAccount = account;
        existingAccount[name] = value;
        setAccount(existingAccount);
    }

    const submitLogin = () => {
        // Temporary
        if (account.password === "" || account.username === "") {
            setError(true);
            return;
        }

        setError(false);
        //Todo API Call to backend for authentication

    }

    return (
        <div className='w-screen h-screen bg-slate-200 items-center justify-center flex'>
            <div className='flex-col w-1/2 bg-white space-y-4 h-3/5 rounded-md justify-around'>
                <div className='flex justify-center my-3'>
                    <div className="text-sky-700  mx-2 md:text-xl sm:text-base ">Login to your Account
                        <span className="fas fa-sign-in-alt text-sky-700 mx-2"></span>
                    </div>
                </div>
                <hr />
                {
                    error ?
                        (<ErrorMessage content='Invalid username / password' />) :
                        (
                            <div className="h-8"></div>
                        )
                }
                <TextBox title={"username"} placeholder={"Username"} type={"text"} setAction={setAction} />
                <TextBox title={"password"} placeholder={"Password"} type={"password"} setAction={setAction} />

                <div className="flex flex-col justify-center items-center">
                    <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-1/2 mt-6" onClick={submitLogin}>Login</button>
                    <span className='text-slate-400 text-sm my-3 sm:text-xs'>New to ES Forex? <Link to={"/register"} className='text-blue-500'>Register</Link></span>
                </div>
            </div>
        </div>
    )
}