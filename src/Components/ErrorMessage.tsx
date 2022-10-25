import React, { FunctionComponent } from 'react'
import { ErrorMessageType } from '../interfaces'

const ErrorMessage: FunctionComponent<ErrorMessageType> = ({ content }) => {
    return (
        <div className="justify-center flex">
            <div className='w-1/2 mt-1 px-3 py-2 bg-red-100 border shadow-sm border-red-300 placeholder-red-400 text-red-400 text-xs block rounded-md sm:text-xs focus:ring-1'>
                {content}
            </div>
        </div>
    )
}

export default ErrorMessage