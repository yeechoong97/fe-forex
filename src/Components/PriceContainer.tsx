import React, { FunctionComponent } from 'react'
import { PriceProps } from '../interfaces'

const PriceContainer: FunctionComponent<PriceProps> = (currency, { currentInstrument, setInstrument }) => {
    return (
        <div className='flex flex-col h-1/5 bg-slate-100 rounded-sm w-full shadow border border-stone-300'>
            <div className='w-full h-1/3 justify-center flex space-x-3 py-1'>
                <i className="fa-solid fa-caret-down mt-0.5 text-red-400"></i>
                <span className='text-slate-600 text-sm'>{currency.instrument}</span>
                <i className="fa-solid fa-caret-up mt-1 text-green-400"></i>
            </div>
            <hr className=' border-stone-300' />
            <div className='flex justify-center w-full h-2/3 relative'>
                <div className='w-1/2 text-center py-1 md:text-base text-slate-700'>{currency.buy}</div>
                <div className='w-1/2 text-center py-1 md:text-base text-slate-700 border-l border-stone-300'>{currency.sell}</div>
                <div className='h-5 w-20 bg-neutral-50 absolute bottom-0 rounded-sm text-sm text-slate-600 text-center border-x border-t border-stone-300'>
                    {currency.pips}
                </div>
            </div>
        </div>
    )
}

export default PriceContainer