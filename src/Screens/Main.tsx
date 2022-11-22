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
import { ModalProps, OnClickHandler, TradeActionProps } from '../interfaces';
import { Divider, Tooltip } from '@mui/material';
import TradeModal from '../Components/TradeModal';
import CloseTradeModal from '../Components/CloseTradeModal';


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

const RightMain: FunctionComponent<TradeActionProps> = ({ setAction, setTradeAction }) => (
    <div className='flex flex-col h-screen w-4/5 px-2 py-3 space-y-3'>
        <div className='w-full h-3/5'>
            <TradingViewWidget symbol="EUR/USD" autosize />
        </div>
        <div className='flex w-full bg-white h-2/5 rounded-md border '>
            <TradeAction setAction={setAction} />
            <TradeRecords setTradeAction={setTradeAction} />
        </div>
    </div>
)



const Main = () => {

    const [currency, setCurrency] = useState("EUR/USD");
    const [modalStatus, setModalStatus] = useState(false);
    const [closeModalStatus, setCloseModalStatus] = useState(false);

    const updateSetCurrency = (event: ChangeEvent<HTMLDivElement>) => {
        console.log(event.target);
        // Todo Complete the state with react redux
    }

    return (
        <div className='flex h-screen w-screen px-1 overflow-hidden'>
            <MiniDrawer />
            <LeftMain />
            <RightMain setAction={() => setModalStatus(!modalStatus)} setTradeAction={() => setCloseModalStatus(true)} />
            <TradeModal setAction={() => setModalStatus(!modalStatus)} modalStatus={modalStatus} />
            <CloseTradeModal setAction={() => setCloseModalStatus(!closeModalStatus)} modalStatus={closeModalStatus} />
        </div>
    )
}

export default Main