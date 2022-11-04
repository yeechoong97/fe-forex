import MiniDrawer from '../Components/MiniDrawer';
import "../styles/style.css";
import TradingViewWidget from 'react-tradingview-widget';
import PriceContainer from '../Components/PriceContainer';
import { DUMMY_DATA } from '../data';
import AccountContainer from '../Components/AccountContainer';
import TradeAction from '../Components/TradeAction';
import { ChangeEvent, useState } from 'react';


const LeftMain = () => (
    <div className='flex flex-col h-screen w-1/5 px-2 py-3 space-y-3'>
        <div className='flex-col w-full bg-white space-y-4 h-3/5 rounded-md justify-around px-3 py-3 overflow-y-auto hide-scroll'>
            {DUMMY_DATA.map((item, index) => (
                <PriceContainer key={index} {...item} />
            ))}
        </div>
        <div className='flex-col w-full bg-white space-y-4 h-2/5 rounded-md justify-around px-2 py-2 '>
            <AccountContainer />
        </div>
    </div>
)


const RightMain = () => (
    <div className='flex flex-col h-screen w-4/5 px-2 py-3 space-y-3'>
        <div className='w-full h-3/5'>
            <TradingViewWidget symbol="EUR/USD" autosize />
        </div>
        <div className='flex w-full bg-white h-2/5 rounded-md border '>
            <TradeAction />
            <div className='w-5/6 overflow-x-auto'>
                <table className="w-full text-xs text-left text-slate-600 table-auto">
                    <thead className=" text-slate-700 uppercase bg-slate-100 border-b">
                        <tr className='divide-x'>
                            <th scope="col" className="py-3 px-3">
                                Date
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Pair
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Type
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Units
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Enter
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Current
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Profit (USD)
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Profit (Spread)
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Profit (%)
                            </th>
                            <th scope="col" className="py-3 px-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-slate-200 hover:cursor-pointer divide-x hover:divide-slate-300 hover:border-slate-300 hover:border-t hover:border-r">
                            <td className="py-3 px-3">
                                11/11/2022
                                <br />
                                11:23 PM
                            </td>
                            <td className="py-3 px-3">
                                EUR/USD
                            </td>
                            <td className="py-3 px-3">
                                Short
                            </td>
                            <td className="py-3 px-3">
                                30,000
                            </td>
                            <td className="py-3 px-3">
                                121.223
                            </td>
                            <td className="py-3 px-3">
                                120.12
                            </td>
                            <td className="py-3 px-3">
                                30.2
                            </td>
                            <td className="py-3 px-3">
                                1.2
                            </td>
                            <td className="py-3 px-3">
                                10.11
                            </td>
                            <td className="py-3 px-3 text-center">
                                <i className="fa-solid fa-chevron-right"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* <div className='space-x-8 bg-gray-100 px-3 py-2 h-10 text-slate-600 w-full text-sm'>
                    <span>Date</span>
                    <span>Pair</span>
                    <span>Units</span>
                    <span>Type</span>
                    <span>Margin</span>
                    <span>Price</span>
                    <span>Current</span>
                    <span>Profit (USD)</span>
                    <span>Profit (Spread)</span>
                    <span>Profit (%)</span>
                    <span>Action</span>
                </div> */}
                {/* <table className='text-slate-600 w-full h-auto text-sm'>
                    <thead className='bg-gray-100 text-slate-700 px-2 py-2 border-b'>
                        <tr className='divide-x'>
                            <th className='w-1/12 py-3'>Date</th>
                            <th className='w-1/12'>Pair</th>
                            <th className='w-1/12'>Units</th>
                            <th className='w-1/12'>Type</th>
                            <th className='w-1/12'>Margin</th>
                            <th className='w-2/12'>Enter Price</th>
                            <th className='w-2/12'>Current Price</th>
                            <th className='break-normal w-1/12'>Profit (USD)</th>
                            <th className='w-1/12'>Profit (Spread)</th>
                            <th className='w-1/12'>Profit (%)</th>
                            <th className='w-1/12'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-xs overflow-y-auto'>
                        <tr className='divide-x'>
                            <th>11/11/2022</th>
                            <th>EUR/USD</th>
                            <th>100,000</th>
                            <th>Short</th>
                            <th>1,000</th>
                            <th>131.2213</th>
                            <th>132.331</th>
                            <th>11.32</th>
                            <th>1.33</th>
                            <th>8.92%</th>
                            <th>Action</th>
                        </tr>
                        <tr className='divide-x'>
                            <th>11/11/2022</th>
                            <th>EUR/USD</th>
                            <th>100,000</th>
                            <th>Short</th>
                            <th>1,000</th>
                            <th>131.2213</th>
                            <th>132.331</th>
                            <th>11.32</th>
                            <th>1.33</th>
                            <th>8.92%</th>
                            <th>Action</th>
                        </tr>
                        <tr className='divide-x'>
                            <th>11/11/2022</th>
                            <th>EUR/USD</th>
                            <th>100,000</th>
                            <th>Short</th>
                            <th>1,000</th>
                            <th>131.2213</th>
                            <th>132.331</th>
                            <th>11.32</th>
                            <th>1.33</th>
                            <th>8.92%</th>
                            <th>Action</th>
                        </tr>
                        <tr className='divide-x'>
                            <th>11/11/2022</th>
                            <th>EUR/USD</th>
                            <th>100,000</th>
                            <th>Short</th>
                            <th>1,000</th>
                            <th>131.2213</th>
                            <th>132.331</th>
                            <th>11.32</th>
                            <th>1.33</th>
                            <th>8.92%</th>
                            <th>Action</th>
                        </tr>
                        <tr className='divide-x'>
                            <th>11/11/2022</th>
                            <th>EUR/USD</th>
                            <th>100,000</th>
                            <th>Short</th>
                            <th>1,000</th>
                            <th>131.2213</th>
                            <th>132.331</th>
                            <th>11.32</th>
                            <th>1.33</th>
                            <th>8.92%</th>
                            <th>Action</th>
                        </tr>
                        <tr className='divide-x'>
                            <th>11/11/2022</th>
                            <th>EUR/USD</th>
                            <th>100,000</th>
                            <th>Short</th>
                            <th>1,000</th>
                            <th>131.2213</th>
                            <th>132.331</th>
                            <th>11.32</th>
                            <th>1.33</th>
                            <th>8.92%</th>
                            <th>Action</th>
                        </tr>
                        <tr className='divide-x'>
                            <th>11/11/2022</th>
                            <th>EUR/USD</th>
                            <th>100,000</th>
                            <th>Short</th>
                            <th>1,000</th>
                            <th>131.2213</th>
                            <th>132.331</th>
                            <th>11.32</th>
                            <th>1.33</th>
                            <th>8.92%</th>
                            <th>Action</th>
                        </tr>
                        <tr className='divide-x'>
                            <th>11/11/2022</th>
                            <th>EUR/USD</th>
                            <th>100,000</th>
                            <th>Short</th>
                            <th>1,000</th>
                            <th>131.2213</th>
                            <th>132.331</th>
                            <th>11.32</th>
                            <th>1.33</th>
                            <th>8.92%</th>
                            <th>Action</th>
                        </tr>
                        <tr className='divide-x'>
                            <th>11/11/2022</th>
                            <th>EUR/USD</th>
                            <th>100,000</th>
                            <th>Short</th>
                            <th>1,000</th>
                            <th>131.2213</th>
                            <th>132.331</th>
                            <th>11.32</th>
                            <th>1.33</th>
                            <th>8.92%</th>
                            <th>Action</th>
                        </tr>

                    </tbody>
                </table> */}
            </div>
        </div>
    </div>
)

const Main = () => {

    const [currency, setCurrency] = useState("EUR/USD");

    const updateSetCurrency = (event: ChangeEvent<HTMLDivElement>) => {
        console.log(event.target);
        // Todo Complete the state with react redux
    }

    return (
        <div className='flex h-screen w-screen px-1 overflow-hidden'>
            <MiniDrawer />
            <LeftMain />
            <RightMain />
        </div>
    )
}

export default Main