import React from 'react'
import { motion } from 'framer-motion';

const Graph = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:0}}
    transition={{duration:1}}
    className='w-[100%] lg:w-full mt-8 space-y-3 bg-white rounded-md shadow-xl p-5'>
        <p className='text-xl font-bold py-2 bg-blue-500 w-fit rounded-lg px-4 mb-3 text-white'>Graph</p>
        </motion.div>
  )
}

export default Graph