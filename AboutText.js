import React from 'react'
import AboutTextImage1 from "../assets/AboutTextImage1.png"
import AboutTextImage2 from "../assets/AboutTextImage2.png"

export default function AboutText() {
  return (
    <div className='mt-20 mb-20'>
      {/* First Container */}
      <div className='w-[90%] flex flex-wrap justify-center items-center mx-auto'>
        <div className='w-[100%] lg:w-[40%] text-lg sm:text-xl leading-10 mt-6 p-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ipsum ut lorem ultrices amet erat phasellus interdum. Felis etiam sem porttitor justo, amet. Cras adipiscing interdum nulla egestas. Iaculis quam sodales odio cras dolor lobortis. Amet vestibulum congue morbi sed justo, quis mi. Ac id dolor, etiam neque pharetra aenean odio odio sit. Ultricies lacus lorem imperdiet aliquet dictumst at quis. Mattis posuere lectus lectus viverra nec mi, tincidunt quis dictumst.
        </div>
        <div className='w-[90%] lg:w-[50%] flex justify-center items-center mt-6'>
          <img src={AboutTextImage1} alt="" />
        </div>
      </div>

      {/* Second Container */}
      <div className='w-[90%] flex flex-wrap justify-center items-center mx-auto'>
        <div className='w-[90%] lg:w-[50%] flex justify-center items-center mt-6 max-lg:order-last'>
          <img src={AboutTextImage1} alt="" />
        </div>
        <div className='w-[90%] lg:w-[40%] text-lg sm:text-xl leading-10 mt-6 max-lg:order-first p-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec ipsum ut lorem ultrices amet erat phasellus interdum. Felis etiam sem porttitor justo, amet. Cras adipiscing interdum nulla egestas. Iaculis quam sodales odio cras dolor lobortis. Amet vestibulum congue morbi sed justo, quis mi. Ac id dolor, etiam neque pharetra aenean odio odio sit. Ultricies lacus lorem imperdiet aliquet dictumst at quis. Mattis posuere lectus lectus viverra nec mi, tincidunt quis dictumst.
        </div>
      </div>
    </div>
  )
}
