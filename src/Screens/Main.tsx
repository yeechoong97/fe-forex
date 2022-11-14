import MiniDrawer from '../Components/MiniDrawer';
import "../styles/style.css";
import TradingViewWidget from 'react-tradingview-widget';
import PriceContainer from '../Components/PriceContainer';
import { DUMMY_DATA } from '../data';
import AccountContainer from '../Components/AccountContainer';
import TradeAction from '../Components/TradeAction';
import { ChangeEvent, FunctionComponent, useState } from 'react';
import TradeRecords from '../Components/TradeRecords';
import Modal from '@mui/material/Modal/Modal';
import { ModalProps, OnClickHandler } from '../interfaces';
import { Divider } from '@mui/material';


const LeftMain = () => (
    <div className='flex flex-col h-screen w-1/5 px-2 py-3 space-y-3'>
        <div className='flex-col w-full bg-white space-y-4 h-3/5 rounded-md justify-around px-5 py-5 overflow-y-auto hide-scroll'>
            {DUMMY_DATA.map((item, index) => (
                <PriceContainer key={index} {...item} />
            ))}
        </div>
        <div className='flex-col w-full bg-white space-y-4 h-2/5 rounded-md justify-around px-2 py-2 '>
            <AccountContainer />
        </div>
    </div>
)


const RightMain: FunctionComponent<OnClickHandler> = ({ setAction }) => (
    <div className='flex flex-col h-screen w-4/5 px-2 py-3 space-y-3'>
        <div className='w-full h-3/5'>
            <TradingViewWidget symbol="EUR/USD" autosize />
        </div>
        <div className='flex w-full bg-white h-2/5 rounded-md border '>
            <TradeAction setAction={setAction} />
            <TradeRecords />
        </div>
    </div>
)

const TradeModal: FunctionComponent<ModalProps> = ({ modalStatus, setAction }) => (
    <>
        <Modal
            open={modalStatus}
            onClose={setAction}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='flex justify-center items-center h-screen w-screen' onClick={setAction}>
                <div className="bg-slate-200 h-1/2 w-1/3 rounded-md shadow-lg relative">
                    <span className='w-7 h-7 rounded-full bg-white text-center pt-0.5 absolute top-2 right-2 shadow-md'>
                        <i className="fa-solid fa-xmark text-slate-500"></i>
                    </span>
                    <div className='flex px-5 py-3 mt-3 w-full h-1/4 justify-center items-center'>
                        <div className='text-slate-600 text-base rounded-full bg-white w-1/4 h-full shadow-md flex flex-col justify-center items-center cursor-pointer group hover:bg-blue-400 border'>
                            <span className='text-blue-400 group-hover:text-white'>Buy</span>
                            <span className='text-sm group-hover:text-slate-100'>121.2234</span>
                        </div>
                        <Divider className='w-4' />
                        <div className='border rounded-lg bg-neutral-100 w-1/6 h-1/2 shadow flex justify-center items-center text-slate-700 text-sm'>
                            0.7
                        </div>
                        <Divider className='w-4' />
                        <div className='text-slate-600 text-base rounded-full bg-white w-1/4 h-full shadow-md flex flex-col justify-center items-center cursor-pointer group hover:bg-red-400 border'>
                            <span className='text-red-400 group-hover:text-white'>Buy</span>
                            <span className='text-sm group-hover:text-slate-100'>121.2234</span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </>
)

const Main = () => {

    const [currency, setCurrency] = useState("EUR/USD");
    const [modalStatus, setModalStatus] = useState(false);

    const updateSetCurrency = (event: ChangeEvent<HTMLDivElement>) => {
        console.log(event.target);
        // Todo Complete the state with react redux
    }

    return (
        <div className='flex h-screen w-screen px-1 overflow-hidden'>
            <MiniDrawer />
            <LeftMain />
            <RightMain setAction={() => setModalStatus(!modalStatus)} />
            <TradeModal setAction={() => setModalStatus(!modalStatus)} modalStatus={modalStatus} />
        </div>
    )
}

export default Main