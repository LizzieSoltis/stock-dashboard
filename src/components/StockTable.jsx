//render simple html table with stock symbol, current price, and change percent
import React from 'react';

function StockTable({ stocks }){
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Symbol</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Change %</th>
                    </tr>
                </thead>
            <tbody>
                {stocks.map((stock, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {stock.symbol}
                        </th>
                        <td className="px-6 py-4">{stock.c}</td>
                        <td className="px-6 py-4">{stock.dp}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}
export default StockTable;
