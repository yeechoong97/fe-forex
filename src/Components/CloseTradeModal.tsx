import Divider from '@mui/material/Divider/Divider'
import Modal from '@mui/material/Modal/Modal'
import Tooltip from '@mui/material/Tooltip/Tooltip'
import { FunctionComponent } from 'react'
import { ModalProps } from '../interfaces'

const CloseTradeModal: FunctionComponent<ModalProps> = ({ modalStatus, setAction }) => (
    <>
        <Modal
            open={modalStatus}
            onClose={setAction}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='flex justify-center items-center h-screen w-screen'>
                <div className="bg-slate-50 h-1/2 w-1/3 rounded-md shadow-lg relative flex flex-col justify-start items-center z">
                    <span className='w-7 h-7 rounded-full bg-white text-center pt-0.5 absolute top-2 right-2 shadow-md hover:bg-zinc-400  cursor-pointer group' onClick={setAction}>
                        <i className="fa-solid fa-xmark text-slate-500 group-hover:text-white"></i>
                    </span>
                    <div className="mt-8 w-1/2 px-3 py-2 bg-slate-100 font-bold shadow-md  text-slate-600 rounded-md sm:text-sm text-center my-1">
                        EUR/USD
                    </div>
                    <div className="w-1/2 px-3 py-2 bg-slate-100 font-semibold shadow-md text-slate-500 rounded-md sm:text-sm text-center my-1">
                        Available Units: 10000
                    </div>
                    <div className="flex justify-end items-center space-x-5 w-1/2 relative my-3">
                        <span className='text-sm text-slate-500'>Close Units: </span>
                        {/* <Tooltip title="Maximum Units: 1,000,000" placement='bottom' arrow> */}
                        <input className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" type="text" name="units" placeholder="Enter Units" autoFocus={true} value={10000} />
                        {/* </Tooltip> */}
                    </div>
                    <div className='flex w-1/2 space-x-1 my-2'>
                        <div className='cursor-pointer w-1/4 bg-white border rounded-lg text-sm text-slate-500 h-10 flex justify-center items-center'>
                            25%
                        </div>
                        <div className='cursor-pointer w-1/4 bg-white border rounded-lg text-sm text-slate-500 h-10 flex justify-center items-center'>
                            50%
                        </div>
                        <div className='cursor-pointer w-1/4 bg-white border rounded-lg text-sm text-slate-500 h-10 flex justify-center items-center'>
                            75%
                        </div>
                        <div className='cursor-pointer w-1/4 bg-white border rounded-lg text-sm text-slate-500 h-10 flex justify-center items-center border-sky-500 ring-1'>
                            100%
                        </div>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-1/2 mt-8" onClick={() => { }}>
                        <div>Units Remaining: 0</div>
                        <div>Profit: 0</div>
                    </button>
                </div>
            </div>
        </Modal>
    </>
)

export default CloseTradeModal