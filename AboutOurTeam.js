import React from 'react'
import AboutOurTeamImage from "../assets/AboutOurTeamImage.png"

export default function AboutOurTeam() {
  return (
    <div className='mt-20 mb-20'>
        <span className='border-b-6 border-green-600 flex justify-center items-center text-3xl font-semibold'><p>Our </p> <p className='text-green-600'> Team</p></span>
        
        <div className='flex flex-wrap justify-between md:justify-evenly'>
            <div className='w-[40%] lg:w-[20%] mt-4 flex justify-center'>
                <img src={AboutOurTeamImage} alt="" className='max-md:h-[80%]' />
            </div>
            <div className='w-[40%] lg:w-[20%] mt-4 flex justify-center'>
                <img src={AboutOurTeamImage} alt="" className='max-md:h-[80%]' />
            </div>
            <div className='w-[40%] lg:w-[20%] mt-4 flex justify-center'>
                <img src={AboutOurTeamImage} alt="" className='max-md:h-[80%]' />
            </div>
            <div className='w-[40%] lg:w-[20%] mt-4 flex justify-center'>
                <img src={AboutOurTeamImage} alt="" className='max-md:h-[80%]' />
            </div>
        </div>
    </div>
  )
}
