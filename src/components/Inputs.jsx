import React from 'react'
import Transactions from './Transactions'
import { motion } from 'framer-motion';
import apiSlice from '../store/apiSlice';

const Inputs = () => {
    const [amount, setAmount] = React.useState('');
    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const { data, isSuccess, isLoading, isError } = apiSlice.useGetLabelsQuery();
    let categoriesdata = apiSlice.useGetCategoriesQuery();
    const categories = categoriesdata.data;
    console.log(categories);
    let transactions;

    if (isSuccess) {
        transactions = <Transactions data={data} />
    }
    else if (isLoading) {
        transactions = <p>Loading...</p>
    }
    else if (isError) {
        transactions = <p>Error</p>

    }
    const [addTransaction] = apiSlice.useAddTransactionMutation();
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            type,
            amount
        }
        addTransaction(data);
        setAmount('');
        setName('');
        setType('');

    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-[100%] lg:w-[90%] mx-auto  mt-5 p-3'>
                <div className="w-full bg-white p-5 rounded-lg shadow-xl">
                    <p className="text-xl font-bold py-2 bg-blue-500 w-fit rounded-lg px-4 mb-3 text-white">Add Transaction</p>
                    <form onSubmit={onSubmit} className="w-full justify-center items-center space-y-3 mx-auto max-w-sm">
                        <input type="text" value={name} onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        } placeholder='Salary Expense Investment' className="w-full bg-gray-100 px-3 py-2 text-gray-700 focus:border-2 focus:border-blue-500 duration-200 ease-linear border rounded-lg focus:outline-none" />
                        <select value={type} onChange={
                            (e) => {
                                setType(e.target.value)
                            }
                        } className="w-full bg-gray-100 px-3 py-2 text-gray-700 focus:border-2 focus:border-blue-500 duration-200 ease-linear border rounded-lg focus:outline-none">
                            <option value=''>Select Category</option>
                            {
                                categories?.map((item, index) => (
                                    <option key={item.id} value={item.type}>{item.type}</option>
                                ))
                            }
                        </select>
                        <input type="number" value={amount} onChange={
                            (e) => {
                                setAmount(e.target.value)
                            }
                        } placeholder='amount' className="w-full bg-gray-100 px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 duration-300 ease-linear border rounded-lg focus:outline-none" />
                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-200 ease-out">Add</button>
                    </form>
                </div>
                {
                    transactions
                }
            </motion.div>

        </>
    )
}

export default Inputs