import React from 'react'

const Header = () => {
    return (
        <div className="hidden lg:inline-flex bg-white w-screen h[20vh] px-2 py-4 shadow-md">
            <div className="w-fit text-3xl px-3 font-bold text-left flex items-center justify-center ml-4">
                ExpenseAi
            </div>
            <div className="flex-grow">
                <li className=" flex justify-center">
                    <a href="#" className="px-3 py-2 text-lg font-medium text-gray-500 hover:text-gray-900">Home</a>
                    <a href="#" className="px-3 py-2 text-lg font-medium text-gray-500 hover:text-gray-900">About</a>
                    <a href="#" className="px-3 py-2 text-lg font-medium text-gray-500 hover:text-gray-900">Contact</a>
                </li>
            </div>
            <div className="w-fit text-xl px-3 font-bold text-right flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-200 ease-out">
                    Login
                </button>
            </div>

        </div>
    )
}

export default Header