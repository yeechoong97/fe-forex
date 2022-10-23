import React from 'react'

export const Login = () => {
    return (
        <div className='w-screen h-screen bg-slate-200 items-center justify-center flex'>
            <div className='flex-col w-1/2 bg-white space-y-4 h-3/5 rounded-md justify-around'>
                <div className='flex justify-center my-3'>
                    <div className="text-sky-700  mx-2 md:text-xl sm:text-base ">Login to your Account
                        <span className="fas fa-sign-in-alt text-sky-700 mx-2"></span>
                    </div>
                </div>
                <hr />
                <div className="justify-center flex">
                    <div className='w-1/2 mt-1 px-3 py-2 bg-red-100 border shadow-sm border-red-300 placeholder-red-400 text-red-400 text-xs block rounded-md sm:text-xs focus:ring-1'>
                        Invalid Username / Password
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span className='text-slate-500 text-sm w-1/2'>Username</span>
                    <input id="username" className="w-1/2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" type="text" name="username" placeholder="Username" required autoFocus />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span className='text-slate-500 text-sm w-1/2'>Password</span>
                    <input id="password" className="w-1/2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" type="password" name="password" placeholder="Password" required />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-1/2 mt-6" type="submit">Login</button>
                    <span className='text-slate-400 text-sm my-3 sm:text-xs'>New to ES Forex? <a href="#" className='text-blue-500'>Register</a></span>
                </div>
            </div>
        </div>
    )
}
