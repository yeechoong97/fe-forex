import React, { FunctionComponent } from 'react'
import { TextBoxType } from '../interfaces';

const TextBox: FunctionComponent<TextBoxType> = ({ title, placeholder, type, setAction, value, autoFocus = false }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <span className='text-slate-500 text-sm w-1/2'>{placeholder}</span>
            <input className="w-1/2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" type={type} name={title} placeholder={placeholder} required autoFocus={autoFocus} onChange={setAction} value={value} />
        </div>
    )
}


export default TextBox;