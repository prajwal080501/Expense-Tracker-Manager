import { Input } from 'postcss'
import React from 'react'
import Graph from '../components/Graph'
import Header from '../components/Header'
import Inputs from '../components/Inputs'
import Mobilemenu from '../components/Mobilemenu'

const Home = () => {
  return (
    <div className="bg-gray-100 w-full h-fit">
        <Header/>
        <Mobilemenu/>
        <div className="flex w-[99%] justify-center">
            <div className="w-[100%]  items-center justify-center lg:w-[90%] p-1  lg:p-3">
                <div className="flex flex-col space-y-2 lg:space-y-0 space-x-0 lg:space-x-8 lg:flex-row justify-center">
                    <div className="w-full sticky top-28 z-10 lg:w-1/2">
                        <Graph/>
                    </div>
                    <div className="w-[100%] lg:w-[50%]">
                        <Inputs/>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Home