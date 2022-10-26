import { CircularProgress, Step, StepConnector, stepConnectorClasses, StepIconProps, StepLabel, Stepper, styled } from '@mui/material'
import React, { ChangeEvent, ChangeEventHandler, FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import ErrorMessage from '../Components/ErrorMessage'
import TextBox from '../Components/TextBox'
import { OnChangeHandler, UserDetails } from '../interfaces'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const InitialAccount: UserDetails = {
    username: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
}

interface LoadingType {
    load: boolean
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

const ProcessSection: FunctionComponent<LoadingType> = ({ load }) => {

    return (
        <div className='flex justify-center flex-col items-center py-3'>
            {
                load ? (<>
                    <CircularProgress />
                    <span className='my-3 text-slate-500 text-sm'>Please wait</span>
                </>) :
                    (<>
                        <CheckCircleIcon className="text-green-500 text-2xl" fontSize='large' />
                        <span className='my-3 text-slate-500 text-sm'>Registration Success</span>
                    </>)
            }
        </div >)
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#90caf9',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#90caf9',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
            color: '#0ea5e9',
        }),
        '& .QontoStepIcon-completedIcon': {
            color: '#4ade80',
            zIndex: 1,
            fontSize: 18,
        },
        '& .QontoStepIcon-circle': {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
    }),
);

const QontoStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <CheckCircleIcon className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}


const RegistrationSteps: string[] = ["Personal", "Credentials", "Success"];

const Register = () => {

    const [accountDetails, setAccountDetails] = useState<UserDetails>(InitialAccount);
    const [error, setError] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(true);

    const setAction = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        const existingAccount = accountDetails;
        accountDetails[name] = value;
        setAccountDetails(existingAccount);
    }

    const submitForm = () => {
        setCurrentStep(currentStep + 1);
        setTimeout(() => {
            setLoading(!loading);
            setCurrentStep(currentStep + 2);
        }, 2000);
        //Todo Redirect back to Login after done register ( in few seconds);
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
                <Stepper activeStep={currentStep} alternativeLabel className='py-3' connector={<QontoConnector />} >
                    {RegistrationSteps.map((label: string) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {
                    error && (<ErrorMessage content='Invalid username / password' />)
                }


                {
                    currentStep === 0 ? (<PersonalSection setAction={setAction} />) :
                        currentStep === 1 ? (<CredentialsSection setAction={setAction} />) :
                            (<ProcessSection load={loading} />)
                }

                {/* Submit Action - Progress Loading Animation -   */}


                <div className="flex flex-col justify-center items-center pb-10">
                    {
                        currentStep < 1 ? (<button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-1/2 mt-6" onClick={() => setCurrentStep(currentStep + 1)}>Next</button>) :
                            currentStep < 2 ? (<button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-1/2 mt-6" onClick={submitForm}>Submit</button>) : <></>
                    }
                    {currentStep === 1 && (<button className="bg-slate-100 hover:bg-slate-200 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-slate-500 w-1/2 mt-3" onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
                    )}
                    {
                        currentStep < 2 && (<span className='text-slate-400 text-sm my-3 sm:text-xs'>Have account? <Link to={"/login"} className='text-blue-500'>Login Here</Link></span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Register