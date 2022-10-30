import React from 'react'
import MiniDrawer from '../Components/MiniDrawer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Divider } from '@mui/material';

const LeftMain = () => (
    <div className='flex flex-col h-screen w-1/5 px-2 py-3 space-y-3'>
        <div className='flex-col w-full bg-white space-y-4 h-2/3 rounded-md justify-around px-3 py-3'>
            <PriceContainer />
            <PriceContainer />
            <PriceContainer />
            <PriceContainer />
            {/* <PriceContainer /> */}
        </div>
        <div className='flex-col w-full bg-white space-y-4 h-1/3 rounded-md justify-around'>
            Account
        </div>
    </div>
)

const PriceContainer = () => {
    return (
        <div className='flex flex-col h-1/5  bg-slate-100 rounded-sm w-full shadow'>
            <div className='w-full h-1/3 justify-center flex space-x-3 py-1'>
                <i className="fa-solid fa-caret-down mt-0.5 text-red-400"></i>
                <span className='text-slate-600 text-sm'>AUD / USD</span>
                <i className="fa-solid fa-caret-up mt-1 text-green-400"></i>
            </div>
            <hr />
            <div className='flex justify-center w-full h-2/3 relative'>
                <div className='w-1/2 text-center py-1 text-2xl text-slate-600'>20.22</div>
                <div className='w-1/2 text-center py-1 text-2xl text-slate-600 border-l'>21.23</div>
                <div className='h-5 w-20 bg-neutral-50 absolute bottom-0 rounded-sm text-sm text-slate-600 text-center border-x border-t'>
                    1.22
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