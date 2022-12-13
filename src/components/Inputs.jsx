import React from 'react'
import Transactions from './Transactions'

const Inputs = () => {
    return (
        <>
        <div className='w-[100%] lg:w-[90%] mx-auto  mt-5 p-3'>
            <div className="w-full bg-white p-5 rounded-lg shadow-xl">
                <p className="text-xl font-bold py-2 bg-blue-500 w-fit rounded-lg px-4 mb-3 text-white">Add Transaction</p>
                <form className="w-full justify-center items-center space-y-3 mx-auto max-w-sm">
                    <input type="text" placeholder='Salary Expense Investment' className="w-full bg-gray-100 px-3 py-2 text-gray-700 focus:border-2 focus:border-blue-500 duration-200 ease-linear border rounded-lg focus:outline-none" />
                    <select className="w-full bg-gray-100 px-3 py-2 text-gray-700 border focus:border-2 focus:border-blue-500 duration-200 ease-linear rounded-lg focus:outline-none">
                        <option>Salary</option>
                        <option>Expense</option>
                        <option>Investment</option>
                    </select>
                    <input type="text" placeholder='Salary Expense Investment' className="w-full bg-gray-100 px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 duration-300 ease-linear border rounded-lg focus:outline-none" />
                </form>
            </div>
            <Transactions/>
        </div>
      
        </>
    )
}

export default Inputs