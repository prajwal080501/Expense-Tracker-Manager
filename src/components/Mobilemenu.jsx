import React from 'react'

const Mobilemenu = () => {
  return (
    // mobile menu
    <div className='lg:hidden sticky top-0'>
        <div className='flex  justify-between items-center bg-white w-screen h-16 px-2 py-4 shadow-md'>
            <div className='w-fit text-2xl px-3 font-bold text-left flex items-center justify-center'>
                Expense Tracker
            </div>
            <div className='w-fit text-xl px-3 font-bold text-right flex items-center justify-center'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-200 ease-out'>
                    Login
                </button>
            </div>
        </div>
        <div className='flex justify-center items-center bg-white w-screen h-16 px-2 py-4 shadow-md'>
            <div className='w-fit text-xl px-3 font-bold text-left flex items-center justify-center'>
                <a className=' hover:text-blue-500 cursor-pointer text-black font-bold py-2 px-4 rounded duration-200 ease-out'>
                    Home
                </a>
            </div>
            <div className='w-fit text-xl px-3 font-bold text-left flex items-center justify-center'>
                <a className=' hover:text-blue-500 cursor-pointer text-black font-bold py-2 px-4 rounded duration-200 ease-out'>
                    About
                </a>
            </div>
            <div className='w-fit text-xl px-3 font-bold text-left flex items-center justify-center'>
                <a className=' hover:text-blue-500 cursor-pointer text-black font-bold py-2 px-4 rounded duration-200 ease-out'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Mobilemenu