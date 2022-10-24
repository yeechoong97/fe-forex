import { Step, StepLabel, Stepper } from '@mui/material'
import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import TextBox from '../Components/TextBox'
import { ErrorMessageType } from '../interfaces'

const ErrorMessage: FunctionComponent<ErrorMessageType> = ({ content }) => (
    <div className="justify-center flex">
        <div className='w-1/2 mt-1 px-3 py-2 bg-red-100 border shadow-sm border-red-300 placeholder-red-400 text-red-400 text-xs block rounded-md sm:text-xs focus:ring-1'>
            {content}
        </div>
    </div>
)

const RegistrationSteps: string[] = ["Personal", "Credentials", "Success"];

const Register = () => {
    return (
        <div className='w-screen h-screen bg-slate-200 items-center justify-center flex'>
            <div className='flex-col w-1/2 bg-white space-y-4 h-auto rounded-md justify-around '>
                <div className='flex justify-center my-3'>
                    <div className="text-sky-700  mx-2 md:text-xl sm:text-base ">Account Registration
                        <span className="fas fa-file-user text-sky-700 mx-2"></span>
                    </div>
                </div>
                <hr />
                <Stepper activeStep={0} alternativeLabel className='py-3' >
                    {RegistrationSteps.map((label: string) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {/* {
                    error ?
                        (<ErrorMessage content='Invalid username / password' />) :
                        (
                            <div className="h-8"></div>
                        )
                } */}

                {/* Todo Update the Text Field */}
                {/* <TextBox title={"username"} placeholder={"Username"} type={"text"} setAction={() => { }} /> */}
                <TextBox title={"name"} placeholder={"Name"} type={"text"} setAction={() => { }} />
                <TextBox title={"email"} placeholder={"Email"} type={"text"} setAction={() => { }} />
                <TextBox title={"phone"} placeholder={"Phone"} type={"text"} setAction={() => { }} />
                {/* <TextBox title={"password"} placeholder={"Password"} type={"password"} setAction={() => { }} />
                <TextBox title={"confirmpassword"} placeholder={"Confirm Password"} type={"password"} setAction={() => { }} /> */}


                <div className="flex flex-col justify-center items-center pb-10">
                    <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-1/2 mt-6">Register</button>
                    <span className='text-slate-400 text-sm my-3 sm:text-xs'>Have account? <Link to={"/login"} className='text-blue-500'>Login Here</Link></span>

                </div>
            </div>
        </div>
    )
}

export default Register