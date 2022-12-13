import React from 'react'

const Transactions = () => {
    return (
        // display the transactions
        <div className='w-full mx-auto mt-5 space-y-3 bg-white rounded-md shadow-xl p-5'>
            <p className='text-xl font-bold py-2 bg-blue-500 w-fit rounded-lg px-4 mb-3 text-white'>Transactions</p>
            <div className='flex items-center border-l-4 border-green-400 bg-gray-200 p-2 rounded-md justify-around'>
                <p className='text-lg font-bold'>Salary</p>
                <p className='text-lg font-bold'>$1000</p>
                {/* delete button */}
                <button className='bg-red-500  hover:bg-red-700 text-white font-bold py-1 px-4 rounded duration-200 ease-out'>
                    Delete
                </button>
            </div>
            <div className='flex items-center border-l-4 border-green-400 bg-gray-200 p-2 rounded-md justify-around'>
                <p className='text-lg font-bold'>Expense</p>
                <p className='text-lg font-bold'>$1000</p>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded duration-200 ease-out'>
                    Delete
                </button>
            </div>
            <div className='flex items-center border-l-4 border-green-400 bg-gray-200 p-2 rounded-md justify-around'>
                <p className='text-lg font-bold'>Investment</p>
                <p className='text-lg font-bold'>$1000</p>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded duration-200 ease-out'>
                    Delete
                </button>
            </div>
        </div>

    )
}

export default Transactions