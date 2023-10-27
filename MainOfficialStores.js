import React from 'react'
import { MainOfficialStoresData } from '../data/MainOfficialStoresData'

export default function MainOfficialStores() {
  return (
    <div className='mt-8 mb-4'>
        <div className=' h-16 text-white text-2xl font-bold flex items-center justify-center max-md:pl-4 max-md:pr-4 pl-10 pr-10 rounded-t-3xl border bg-gray-100'>
            <span className='text-green-500'>Official Stores</span>
        </div>

        <div className='flex flex-wrap justify-between '>
            {MainOfficialStoresData.map((data, index)=> (
                <div key={index} className='max-md:w-[23%] w-[15%] shadow border mt-4 flex justify-center items-center p-2'>
                    <img src={data.img} alt="MainOfficialStoresData" />
                </div>
            ))}
        </div>
    </div>
  )
}
