import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import React from 'react'
import MiniDrawer from '../Components/MiniDrawer';
import "../styles/style.css";

const LeftMain = () => (
    <div className='flex flex-col h-screen w-1/5 px-2 py-3 space-y-3'>
        <div className='flex-col w-full bg-white space-y-4 h-3/5 rounded-md justify-around px-3 py-3 overflow-y-auto hide-scroll'>
            <PriceContainer />
            <PriceContainer />
            <PriceContainer />
            <PriceContainer />
            <PriceContainer />
        </div>
        <div className='flex-col w-full bg-white space-y-4 h-2/5 rounded-md justify-around px-2 py-2 '>
            <AccountContainer />
        </div>
    </div>
)

const PriceContainer = () => {
    return (
        <div className='flex flex-col h-1/5 bg-slate-100 rounded-sm w-full shadow border border-stone-300'>
            <div className='w-full h-1/3 justify-center flex space-x-3 py-1'>
                <i className="fa-solid fa-caret-down mt-0.5 text-red-400"></i>
                <span className='text-slate-600 text-sm'>AUD / USD</span>
                <i className="fa-solid fa-caret-up mt-1 text-green-400"></i>
            </div>
            <hr className=' border-stone-300' />
            <div className='flex justify-center w-full h-2/3 relative'>
                <div className='w-1/2 text-center  md:text-xl text-slate-600'>20.22</div>
                <div className='w-1/2 text-center md:text-xl text-slate-600 border-l border-stone-300'>21.23</div>
                <div className='h-5 w-20 bg-neutral-50 absolute bottom-0 rounded-sm text-sm text-slate-600 text-center border-x border-t border-stone-300'>
                    1.22
                </div>
            </div>
        </div>
    )
}

const AccountContainer = () => {
    return (
        <div className='flex justify-start flex-col'>
            <div className='mt-3 text-slate-700 px-4 bg-slate-100 py-2 rounded-full flex space-x-5 mx-4 shadow'>
                <div className=" text-green-500 rounded-full px-2 text-base w-7  ">
                    <i className="fa-solid fa-dollar-sign"></i>
                </div>
                <span className='text-slate-700 text-base border-l px-3'>USD</span>
            </div>
            <div className='mt-4 text-slate-700 px-4 bg-slate-100 py-2 rounded-full flex space-x-5 mx-4 shadow'>
                <div className="text-green-500 w-7 rounded-full px-2 text-sm py-1">
                    <i className="fa-solid fa-wallet"></i>
                </div>
                <span className='text-slate-700 text-base border-l px-3 '>5433.22</span>
            </div>
            <div className='flex space-x-3 px-4'>
                <div className='flex flex-col justify-center space-y-2'>
                    <div className="flex w-16 justify-center mt-5 relative">
                        <CircularProgress variant="determinate" value={100} size={65} />
                        <span className='absolute text-slate-700 text-sm flex items-center justify-center top-0 left-0 right-0 bottom-0'>1:20</span>
                    </div>
                    <span className='text-slate-600 text-sm w-16'>Leverage</span>
                </div>
                <div className='flex flex-col justify-center space-y-2'>
                    <div className="inline-flex w-16 justify-center mt-5 relative">
                        <CircularProgress variant="determinate" value={80} size={65} color="success" />
                        <span className='absolute text-slate-700 text-xs flex items-center justify-center top-0 left-0 right-0 bottom-0'>13111.20</span>
                    </div>
                    <span className='text-slate-600 text-sm w-16 text-center'>Margin</span>
                </div>
                <div className='flex flex-col justify-center space-y-2'>
                    <div className="flex w-16 justify-center mt-5 relative">
                        <CircularProgress variant="determinate" value={55} size={65} color="warning" />
                        <Tooltip title="Margin Used" placement='bottom' arrow>
                            <span className='absolute text-slate-700 text-xs flex items-center justify-center top-0 left-0 right-0 bottom-0'>13111.20</span>
                        </Tooltip>
                    </div>
                    <span className='text-slate-600 text-sm w-16 text-center truncate'>Margin Used</span>
                </div>
            </div>
        </div>
    )
}

const RightMain = () => (
    <div className='flex flex-col h-screen w-4/5 px-2 py-3 space-y-3'>
        <div className='flex-col w-full bg-white space-y-4 h-3/5 rounded-md justify-around'>
            Price
        </div>
        <div className='flex-col w-full bg-white space-y-4 h-2/5 rounded-md justify-around'>
            Table
        </div>
    </div>
)

const Main = () => {

    return (
        <div className='flex h-screen w-screen px-1'>
            <MiniDrawer />
            <LeftMain />
            <RightMain />
        </div>

    )
}

export default Main