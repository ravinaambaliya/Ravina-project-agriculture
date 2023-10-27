import React from 'react'
import { MainRecommendedProductsData } from '../data/MainRecommendedProductsData'

export default function MainRecommendedProducts() {
  return (
    <div className='mt-8 mb-4'>
        <div className='bg-green-500 h-16 text-white font-bold flex items-center justify-between max-md:pl-4 max-md:pr-4 pl-10 pr-10 rounded-t-3xl'>
            <div>
                <span className='max-sm:text-base'>Recommended For You</span>
            </div>
            <div>
                <span className='cursor-pointer'>See more</span>
            </div>
        </div>

        <div className='w-[98%] overflow-x-auto pb-10 mt-3'>
            <div className='flex items-center max-md:justify-between justify-center'>
            {MainRecommendedProductsData.map((data, index)=> (
                <div key={index} className='max-md:min-w-[40%] min-w-[16%] flex flex-col'>
                    <div className='w-[80%]'>
                        <img src={data.img} alt="MainRecommendedProductsData" className='w-[100%]' />
                        <div className='flex flex-wrap justify-between mt-2'>
                            <span className='text-sm cursor-pointer font-semibold'>{data.price}</span>
                            <span className='flex items-center cursor-pointer'><img className='h-3 mr-1' src={data.star} alt="" /><span>4.7</span></span>
                        </div>
                            <p className='cursor-default line-through'>{data.cutPrice}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
