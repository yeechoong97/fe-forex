import CircularProgress from '@mui/material/CircularProgress/CircularProgress'
import Tooltip from '@mui/material/Tooltip/Tooltip'

// Todo Update the details in future
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

export default AccountContainer