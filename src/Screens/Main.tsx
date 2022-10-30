import React from 'react'
import MiniDrawer from '../Components/MiniDrawer';

const LeftMain = () => (
    <div className='flex flex-col h-screen w-1/5 px-2 py-3 space-y-3'>
        <div className='flex-col w-full bg-white space-y-4 h-3/5 rounded-md justify-around'>
            Price
        </div>
        <div className='flex-col w-full bg-white space-y-4 h-2/5 rounded-md justify-around'>
            Account
        </div>
    </div>
)

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