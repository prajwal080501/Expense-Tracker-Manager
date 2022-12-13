import React from 'react'

const Labels = ({data}) => {
  return (
    <div className='flex items-center border-l-4 border-green-400 bg-gray-200 p-2 rounded-md justify-around'>
                <p className='text-lg font-bold'>{data.type}</p>
                <p className='text-lg font-bold'>{data.percent.toFixed()}%</p>
            </div>
  )
}

export default Labels