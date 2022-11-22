import React, { FunctionComponent } from 'react'
import { TableModalHandler } from '../interfaces'

const TradeRecords: FunctionComponent<TableModalHandler> = ({ setTradeAction }) => {
    return (
        <div className='w-5/6 overflow-x-auto rounded-tr-lg'>
            <table className="w-full text-xs text-left text-slate-600 table-auto">
                <thead className=" text-slate-700 uppercase bg-slate-100 border-b sticky top-0">
                    <tr className='divide-x'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th scope="col" className="pt-3 text-center" colSpan={3}>
                            Profit In
                            <hr />
                        </th>
                        <td></td>
                    </tr>
                    <tr className='divide-x'>
                        <th scope="col" className="py-2 px-3">
                            Date
                        </th>
                        <th scope="col" className="py-2 px-3">
                            Pair
                        </th>
                        <th scope="col" className="py-2 px-3">
                            Type
                        </th>
                        <th scope="col" className="py-2 px-3">
                            Margin
                        </th>
                        <th scope="col" className="py-2 px-3">
                            Units
                        </th>
                        <th scope="col" className="py-2 px-3">
                            Enter
                        </th>
                        <th scope="col" className="py-2 px-3">
                            Current
                        </th>
                        <th scope="col" className="py-2 px-3">
                            USD
                        </th>
                        <th scope="col" className="py-2 px-3">
                            Spread
                        </th>
                        <th scope="col" className="py-2 px-3">
                            %
                        </th>
                        <th scope="col" className="py-2 px-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b hover:bg-slate-200 hover:cursor-pointer divide-x hover:divide-slate-300 hover:border-slate-300 hover:border-t hover:border-r" onClick={setTradeAction}>
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
                            1000
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
        </div>
    )
}

export default TradeRecords