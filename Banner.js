import React from 'react'
import carouselBlankImage1 from "../assets/carouselBlankImage1.png"
import carouselImage2 from "../assets/carouselImage2.png"
import HomeFoodPriceAnalysis from "../assets/HomeFoodPriceAnalysis.png"

export default function Banner() {
  return (
    <div>
    <div className='flex justify-between overflow-x-auto'>
        <div className='max-md:min-w-[90%] max-md:mr-4 w-[71%]'>
            <img src={carouselBlankImage1} alt="carouselBlankImage1" className='max-md:min-h-[250px]' />
        </div>
        <div className='max-md:min-w-[90%] w-[27%]'>
            <img src={carouselImage2} alt="carouselImage2" className='max-md:min-w-[90%] max-md:max-h-[250px]' />
        </div>
    </div>

    <div className='mt-2 '>
        <img src={HomeFoodPriceAnalysis} alt="HomeFoodPriceAnalysis" className='rounded-xl ' />
    </div>
    </div>
  )
}
