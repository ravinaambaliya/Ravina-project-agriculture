import React from 'react'
import AboutMainBannerRight from "../assets/AboutMainBannerRight.png"
import { BiLogoAdobe } from "react-icons/bi"
import { Link } from 'react-router-dom'

export default function AboutBanner() {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {/* Left Container Laptop */}
      <div className='w-[90%] lg:w-[50%] p-[10%] flex flex-col justify-center max-lg:justify-center'>
        <Link to="/">
          {/* <img src={websiteLogo} alt="websiteLogo" className="w-28 md:w-32" /> */}
          <BiLogoAdobe className="text-3xl md:text-7xl" />
        </Link>

        <span className='text-lg md:text-xl leading-loose mt-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ipsum ut lorem ultrices amet erat phasellus interdum. Felis etiam sem porttitor justo, amet. Cras adipiscing interdum nulla egestas
        </span>
      </div>

      {/* Right Container Laptop */}
      <div className='w-[90%] lg:w-[50%] p-[10%]'>
        <img src={AboutMainBannerRight} alt="" />
      </div>
    </div>
  )
}
