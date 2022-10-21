import React from 'react'

export const Login = () => {
    return (
        <div className='flex-1 flex-col justify-center h-screen'>
            <div >
                <form method="POST">
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration">
                        <span className="fas fa-sign-in-alt"></span>
                    </div>
                    <div className="form-group">
                        <input id="username" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" type="text" name="username" placeholder="Username" required autoFocus />
                    </div>
                    <div className="form-group">
                        <input id="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" type="password" name="password" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                        <div className="form-group">
                            <a href="{{ url('/register') }}" className="btn-danger btn-register btn-block remove-decoration" type="submit">Register</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
