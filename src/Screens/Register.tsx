import { Step, StepLabel, Stepper } from '@mui/material'
import React, { ChangeEvent, ChangeEventHandler, FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import ErrorMessage from '../Components/ErrorMessage'
import TextBox from '../Components/TextBox'
import { OnChangeHandler, UserDetails } from '../interfaces'

const InitialAccount: UserDetails = {
    username: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
}

const PersonalSection: FunctionComponent<OnChangeHandler> = ({ setAction }) => (
    <>
        <TextBox title={"name"} placeholder={"Name"} type={"text"} setAction={setAction} />
        <TextBox title={"email"} placeholder={"Email"} type={"text"} setAction={setAction} />
        <TextBox title={"phone"} placeholder={"Phone"} type={"text"} setAction={setAction} />
    </>
)

const CredentialsSection: FunctionComponent<OnChangeHandler> = ({ setAction }) => (
    <>
        <TextBox title={"username"} placeholder={"Username"} type={"text"} setAction={setAction} />
        <TextBox title={"password"} placeholder={"Password"} type={"password"} setAction={setAction} />
        <TextBox title={"confirmpassword"} placeholder={"Confirm Password"} type={"password"} setAction={setAction} />
    </>
)

const ProcessSection = () => (
    <>
        <p>Last PAge</p>
    </>
)

const RegistrationSteps: string[] = ["Personal", "Credentials", "Success"];

const Register = () => {

    const [accountDetails, setAccountDetails] = useState<UserDetails>(InitialAccount);
    const [error, setError] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const setAction = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        const existingAccount = accountDetails;
        accountDetails[name] = value;
        setAccountDetails(existingAccount);
        console.log(currentStep);
    }


    return (
        <div className='w-screen h-screen bg-slate-200 items-center justify-center flex'>
            <div className='flex-col w-1/2 bg-white space-y-4 h-auto rounded-md justify-around '>
                <div className='flex justify-center my-3'>
                    <div className="text-sky-700  mx-2 md:text-xl sm:text-base ">Account Registration
                        <span className="fas fa-file-user text-sky-700 mx-2"></span>
                    </div>
                </div>
                <hr />
                <Stepper activeStep={currentStep} alternativeLabel className='py-3' >
                    {RegistrationSteps.map((label: string) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {
                    error && (<ErrorMessage content='Invalid username / password' />)
                }


                {
                    currentStep === 0 ? (<PersonalSection setAction={setAction} />) :
                        currentStep === 1 ? (<CredentialsSection setAction={setAction} />) :
                            (<ProcessSection />)
                }

                {/* Submit Action - Progress Loading Animation -   */}


                <div className="flex flex-col justify-center items-center pb-10">
                    {
                        currentStep < 1 ? (<button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-1/2 mt-6" onClick={() => setCurrentStep(currentStep + 1)}>Next</button>) :
                            (<button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-1/2 mt-6" onClick={() => { }}>Submit</button>)
                    }
                    {currentStep === 1 && (<button className="bg-slate-100 hover:bg-slate-200 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-slate-500 w-1/2 mt-3" onClick={() => setCurrentStep(currentStep - 1)}>Back</button>)}
                    <span className='text-slate-400 text-sm my-3 sm:text-xs'>Have account? <Link to={"/login"} className='text-blue-500'>Login Here</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Register