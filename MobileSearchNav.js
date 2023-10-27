import React from 'react';
import { MdOutlineLegendToggle, MdClose } from 'react-icons/md';
import { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiCategoryAlt, BiSolidContact } from 'react-icons/bi'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { SiGooglemarketingplatform, SiTrendmicro } from 'react-icons/si'
import { GiPowderBag } from 'react-icons/gi'
import { FaBusinessTime, FaDelicious } from 'react-icons/fa'
const MobileSearchNav = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [categoriesCollapse, setCategoriesCollapse] = useState(false)

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const categoriesCollapseFunction = () => {
    setCategoriesCollapse(!categoriesCollapse)
  }



  return (
    <div className='max-lg:flex hidden '>
        <div className='mx-auto'>
        <div className="h-20 flex items-center justify-center mx-auto space-x-2 sm:space-x-4 w-[100vw] bg-gray-100">
            <div className='cursor-pointer' onClick={toggleNavbar}>
                <MdOutlineLegendToggle className='text-2xl' />
            </div>
            <input
              className="bg-gray-200 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
              type="text"
              id="navinput"
              name="search"
              placeholder="Search food items, classification and categories"
            />
            <button className="rounded-md px-4 py-2 border bg-green-700 text-white text-base max-md:text-sm font-semibold cursor-pointer" style={{ margin: 0 }}>
              Search
            </button>
          </div>

            <div>
            {navOpen && (
          <div className='fixed top-0 left-0 w-[70vw] h-[100vh] bg-white translate-x-0'>
                <div className='p-10 '>
                        <div className='cursor-pointer' onClick={toggleNavbar}>
                            <MdClose />
                        </div>
                        <div className='font-medium text-lg h-[50px] flex items-center'>
                            <div className='w-8'>
                                <HiHome className='' />
                            </div>
                            <span>Home</span></div>
                        <div
                            className="rounded cursor-pointer font-medium h-[50px] flex items-center"
                            onClick={categoriesCollapseFunction}
                        >
                            <div className='w-8'>
                                <BiCategoryAlt className='text-lg' />
                            </div>
                            {categoriesCollapse ? 
                            (
                                <div className='flex items-center'>
                                    <p className='mr-5 font-medium'>Categories</p>
                                    <IoMdArrowDropup />
                                </div>
                            )
                             : (
                                <div className='flex items-center'>
                                    <p className='mr-5 font-medium'>Categories</p>
                                    <IoMdArrowDropdown />
                                </div>
                             )}
                        </div>
                        {categoriesCollapse && (
                            <div className="rounded mb-6">
                                <div className='text-lg h-[40px] flex items-center cursor-pointer'><span className='w-8'></span> Grains</div>
                                <div className='text-lg h-[40px] flex items-center cursor-pointer'><span className='w-8'></span> Tubers</div>
                                <div className='text-lg h-[40px] flex items-center cursor-pointer'><span className='w-8'></span> Ginger</div>
                                <div className='text-lg h-[40px] flex items-center cursor-pointer'><span className='w-8'></span> Fish</div>
                                <div className='text-lg h-[40px] flex items-center cursor-pointer'><span className='w-8'></span> Fertilizer</div>
                                <div className='text-lg h-[40px] flex items-center cursor-pointer'><span className='w-8'></span> Tools & Equipment</div>
                            </div>
                        )}
                            <div className='font-medium text-lg flex items-center h-[50px] cursor-pointer'><div className='w-8'><SiGooglemarketingplatform /></div> Markets</div>
                            <div className='font-medium text-lg flex items-center h-[50px] cursor-pointer'><div className='w-8'><SiTrendmicro /></div> All Products</div>
                            <div className='font-medium text-lg flex items-center h-[50px] cursor-pointer'><div className='w-8'><GiPowderBag /></div> Vendors</div>
                            <div className='font-medium text-lg flex items-center h-[50px] cursor-pointer'><div className='w-8'><FaBusinessTime /></div>Logistics</div>
                            <div className='font-medium text-lg flex items-center h-[50px] cursor-pointer'><div className='w-8'><BiSolidContact /></div>Contact Us</div>
                            <div className='font-medium text-lg flex items-center h-[50px] cursor-pointer'><div className='w-8'><FaDelicious /></div>About</div>

                    <hr className='max-sm:w-[90%] max-md:w-[60%] w-[80%] mx-auto border-t-2 border-black mt-10' />

                    <button className="mt-10 rounded-md px-4 py-2 bg-green-700 text-white text-base max-md:text-sm font-semibold cursor-pointer " style={{ marginRight: '12px'}}>
                            Sell on tembekasua
                    </button>
                    </div>

        </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default MobileSearchNav;
