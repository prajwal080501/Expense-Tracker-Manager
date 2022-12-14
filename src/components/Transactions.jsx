import React from 'react'
import {motion} from "framer-motion"
import {default as api } from '../store/apiSlice.js';
const Transactions = ({data}) => {
    const [deleteTransaction] = api.useDeleteTransactionMutation();
    const handleDelete = (id) => {
        deleteTransaction(id)
    }
    return (
        // display the transactions
        <motion.div
        initial={{opacity:0, y:-200}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:0}}
        transition={{duration:1}}
         className='w-full mx-auto mt-5 space-y-3 bg-white rounded-md shadow-xl p-5'>
            <p className='text-xl font-bold py-2 bg-blue-500 w-fit rounded-lg px-4 mb-3 text-white'>Transactions</p>
           
           {data?.map((item, index) => (
            <div key={item.id} className='flex items-center border-l-4 border-green-400 bg-gray-200 p-2 rounded-md justify-around'>
            <p className='text-lg font-bold'>{item.name}</p>
            <p className='text-lg font-bold'>{item.amount}</p>
            {/* delete button */}
            <button onClick={
                () => {
                    handleDelete(item.id)
                }
            } className='bg-red-500  hover:bg-red-700 text-white font-bold py-1 px-4 rounded duration-200 ease-out'>
                Delete
            </button>
        </div>
           ))}
            
        </motion.div>

    )
}

export default Transactions