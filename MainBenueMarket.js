import React from 'react'
import { AiOutlineShop, AiTwotoneShop } from "react-icons/ai";
import { MainBenueMarketData } from '../data/MainBenueMarketData'
import { toast } from 'react-toastify';

export default function MainBenueMarket() {
    const buyNowToast = () => {
        toast("Product has been to your cart")
    }
  return (
    <div className='rounded-2xl flex flex-wrap mt-4 mb-4'>
        <div className='max-lg:w-[100%] w-[20%] p-[1%] flex max-lg:flex-row max-lg:justify-between flex-col'>
            <h3 className='font-bold text-2xl'>Benue Markets Holding Today</h3>
            <p className='text-base font-normal'>Thursday Oct 2022</p>
        </div>

        <div className='max-lg:w-[100%] w-[80%] overflow-x-auto pb-10 max-lg:mt-3'>
            <div className='flex items-center '>
            {MainBenueMarketData.map((data, index)=> (
                <div key={index} className='max-md:min-w-[40%] min-w-[25%] flex flex-col'>
                    <div className='w-[80%]'>
                    <img src={data.img} alt="MainBenueMarketData" className='w-[100%]' />
                    <div className='flex justify-between mt-2'>
                        <span className='cursor-pointer'>{data.title}</span>
                        <span className='cursor-pointer flex items-center max-md:hidden'><AiOutlineShop /> <span className='ml-1'>{data.stars}</span></span>
                    </div>
                    <button className="mt-3 w-[100%] rounded-md px-4 py-2 bg-green-700 text-white text-base max-md:text-sm font-semibold cursor-pointer " style={{ marginRight: '12px'}} onClick={buyNowToast}>
                        Shop Now
                    </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
