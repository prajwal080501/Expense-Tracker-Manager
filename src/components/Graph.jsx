import React from 'react'
import { motion } from 'framer-motion';
import { Doughnut } from "react-chartjs-2"
import { Chart, ArcElement } from 'chart.js'
import {default as api} from '../store/apiSlice.js';
import Labels from './Labels.jsx';
import { chart_data, getLabels, getTotal } from './../helpers/helper';

Chart.register(ArcElement);

const Graph = () => {

const {data, isSuccess, isLoading, isError} =  api.useGetLabelsQuery();

let transactions;
let graphData;

if(isSuccess){
    graphData = <Doughnut {...chart_data(data)} />
    transactions =getLabels(data, 'type')?.map(transaction => (
        <Labels key={data.id} data={transaction} />
    ))
}
else if(isLoading){
    transactions = <p>Loading...</p>
    graphData = <p>Loading...</p>
}
else if(isError){
    transactions = <p>Error</p>
    graphData = <p>Error</p>

}



    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 1 }}
            className='w-[100%] lg:w-full mt-8 space-y-3 bg-white rounded-md shadow-xl p-5'>
            <p className='text-xl font-bold py-2 bg-blue-500 w-fit rounded-lg px-4 mb-3 text-white'>Graph</p>
            <div className='w-full justify-center flex'>
                <div className='relative w-[300px] h-[300px] mb-5'>
                    {
                        graphData
                    }
                    <h3 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold'>
                        Total
                        <br />
                        <span className='text-green-600 font-bold text-2xl'>
                            ${getTotal(data)}
                        </span>
                    </h3>
                </div>
            </div>
            <div className='flex flex-col space-y-3'>
                {transactions}
            </div>
        </motion.div>
    )
}

export default Graph