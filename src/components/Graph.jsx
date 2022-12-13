import React from 'react'
import { motion } from 'framer-motion';
import { Doughnut } from "react-chartjs-2"
import { Chart, ArcElement } from 'chart.js'

Chart.register(ArcElement);

const Graph = () => {

    const plugin = {
        //    plugin for changing background color canvas
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart) => {
            const ctx = chart.canvas.getContext('2d');
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = chart.options.plugins.customCanvasBackgroundColor.color;
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    };
    const config = {
        data: {
            datasets: [
                {
                    data: [10, 20, 30],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1,
                    hoverOffset: 4,
                    borderRadius: 30,
                    spacing: 10,
                    maxRotation: 2,
                    // set diameter of chart

                },
            ],
            options: {

                cutout: 115,
                responsive: true,
                animations: {
                    radius: {
                        duration: 1000,
                        easing: 'linear',
                        loop: (context) => context.active
                    },
                    arc: {
                        duration: 1000,
                        easing: 'linear',
                        loop: (context) => context.active
                    }
                },
                plugins: {
                    customCanvasBackgroundColor: {
                        color: 'lightgreen'
                    },
                },
                plugin: { plugin },
            },
        }
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
                    <Doughnut
                        {...config}
                    />
                    <h3 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold'>
                        Total
                        <br />
                        <span >
                            $3000
                        </span>
                    </h3>
                </div>
            </div>
            <div className='flex items-center border-l-4 border-green-400 bg-gray-200 p-2 rounded-md justify-around'>
                <p className='text-lg font-bold'>Salary</p>
                <p className='text-lg font-bold'>57%</p>
            </div>
            <div className='flex items-center border-l-4 border-green-400 bg-gray-200 p-2 rounded-md justify-around'>
                <p className='text-lg font-bold'>Expense</p>
                <p className='text-lg font-bold'>43%</p>
            </div>
            <div className='flex items-center border-l-4 border-green-400 bg-gray-200 p-2 rounded-md justify-around'>
                <p className='text-lg font-bold'>Investment</p>
                <p className='text-lg font-bold'>56%</p>
            </div>

        </motion.div>
    )
}

export default Graph