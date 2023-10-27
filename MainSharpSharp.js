import React from 'react'
import Sharp_SharpDealsLogo from "../data/dataAssets/Sharp-SharpDealsLogo.png"
import { MainSharpSharpData } from '../data/MainSharpSharpData'
import { toast } from 'react-toastify'

export default function MainSharpSharp() {
    const buyNowToast = () => {
        toast("Product has been to your cart")
    }
  return (
    <div className='mt-8 mb-4'>
        <div className='bg-green-600 h-16 text-white font-bold flex items-center justify-between max-md:pl-4 max-md:pr-4 pl-10 pr-10 rounded-t-3xl'>
            <div>
                <img src={Sharp_SharpDealsLogo} alt="Sharp_SharpDealsLogo" />
            </div>
            <div className='max-sm:hidden'>
                Time Left
            </div>
            <div>
                <span className='cursor-pointer'>See more</span>
            </div>
        </div>

        <div className='w-[98%] overflow-x-auto pb-10 mt-3'>
            <div className='flex items-center max-md:justify-between justify-center'>
            {MainSharpSharpData.map((data, index)=> (
                <div key={index} className='max-md:min-w-[40%] min-w-[16%] flex flex-col'>
                    <img src={data.img} alt="MainSharpSharpData" className='w-[80%]' />
                    <h2>{data.name}</h2>
                    <button className="mt-3 w-[80%] rounded-md px-4 py-2 bg-green-700 text-white text-base max-md:text-xs font-semibold cursor-pointer " style={{ marginRight: '12px'}} onClick={buyNowToast}>
                        Shop Now
                    </button>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
