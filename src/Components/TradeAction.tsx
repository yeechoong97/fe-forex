import Divider from '@mui/material/Divider/Divider'
import React, { FunctionComponent } from 'react'
import { OnClickHandler } from '../interfaces'

const TradeAction: FunctionComponent<OnClickHandler> = ({ setAction }) => {
    return (
        <div className='w-1/6 bg-slate-50 flex flex-col justify-center px-4 py-4 space-y-3 border-r rounded-l-lg'>
            <div className='flex-col flex'>
                <span className='text-blue-400 text-sm text-center'>Buy with </span>
                <input type="button" className='bg-blue-400 text-white text-xl py-2 rounded-full mt-1 cursor-pointer' value="1711.11" onClick={setAction} />
            </div>
            <Divider />
            <div className='flex-col flex'>
                <span className='text-red-400 text-sm text-center'>Sell with </span>
                <input type="button" className='bg-red-400 text-white text-xl py-2 rounded-full mt-1 cursor-pointer' value="1711.11" onClick={setAction} />
            </div>
            <Divider />
            <div className='flex-col flex'>
                <span className='text-slate-400 text-sm text-center'>Pips value </span>
                <input type="button" className='bg-slate-400 text-white text-xl py-2 rounded-full mt-1' value="1711.11" />
            </div>
        </div>
    )
}

export default TradeAction