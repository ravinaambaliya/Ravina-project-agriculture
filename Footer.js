import React from "react";
import msg from "../assets/message.png";
import call from "../assets/call.png";
import Mcard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import nurtw from "../assets/NURTW.png";
import Ptravel from "../assets/Pleasure travels.png";
import Blinks from "../assets/Benue Links.png";
import faceboook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import ins from "../assets/ins.png";
import twitter from "../assets/twitter.png";
import linkdind from "../assets/linkedin.png";
import appleandandroid from "../assets/Group 8.png";
import lastLogo from "../assets/lastLogo.png";
import { toast } from "react-toastify";

const Footer = () => {
  const buyNowToast = () => {
    toast("You have been subscribed")
  }
  return (
    <>
  <div className="">
    <div className="p-2 bg-green-600 font-archivo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap max-md:justify-center">
          <div className="flex justify-center items-center text-white max-md:w-[80%] max-xl:w-[50%] w-[25%] my-4">
            <div className="bg-green-900 w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img src={msg} alt="message" />
            </div>
            <div className="text text-xs justify-center">
              <p>EMAIL SUPPORT</p>
              <p>info@tembekasua.com</p>
            </div>
          </div>
          <div className="flex justify-center items-center text-white max-md:w-[80%] max-xl:w-[50%] w-[25%] my-4">
            <div className="icon bg-green-900 w-9 h-9 rounded-full flex items-center justify-center mr-5">
              <img src={call} alt="call" />
            </div>
            <div className="text text-xs">
              <p>PHONE SUPPORT </p>
              <p>07035652264, 07071733333</p>
            </div>
          </div>
          <div className="inputbutton flex justify-center items-center max-md:w-[80%] max-xl:w-[50%] w-[25%] my-4">
            <div className="text text-black">
              <p className="font-semibold text-xs">Subscribe to our latest updates.</p>
              <p className="text-xs">
                <i>We don't share any of your information.</i>
              </p>
            </div>
          </div>
          <div className="inputbutton flex justify-center items-center max-md:w-[80%] max-xl:w-[50%] w-[25%] my-4 ">
            <div className="input flex max-sm:flex-wrap w-full justify-center">
              <input
                type="text"
                placeholder="Type your email address here"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none ml-3"
              />
              <button className="px-4 py-2 rounded-md border border-gray-300 bg-green-800 text-white ml-3" onClick={buyNowToast}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="p-5 bg-black text-white font-archivo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="mb-8 md:mb-0 max-md:w-[80%] max-lg:w-[50%] w-[30%]">
            <ul className="list-none">
              <li className="font-semibold text-green-600 text-sm mb-2">LET US HELP</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">How to shop on Tembekasua?</li>
              <li className="cursor-pointer">Delivery options and timelines</li>
              <li className="cursor-pointer">How to return a product on Tembekasua?</li>
              <li className="cursor-pointer">Corporate and bulk purchases</li>
              <li className="cursor-pointer">Report a Product</li>
              <li className="cursor-pointer">Ship your package anywhere in Nigeria</li>
              <li className="cursor-pointer">Dispute Resolution Policy</li>
              <li className="cursor-pointer">Help Center</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 max-md:w-[80%] max-lg:w-[50%] w-[30%]">
            <ul className="list-none">
              <li className="font-semibold text-green-600 text-sm mb-2">ABOUT TEMBEKASUA</li>
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Terms and Conditions</li>
              <li className="cursor-pointer">Privacy and Cookie Notice</li>
            </ul>
            <p className="text-green-600 mt-4 font-semibold text-sm">
              PAYMENT METHODS & DELIVERY PARTNERS
            </p>
            <div className="icon py-6 flex flex-wrap space-x-2">
              <img className="m-4 w-10" src={Mcard} alt="image" />
              <img className="m-4 w-20" src={visa} alt="image" />
              <img className="m-4 w-10" src={nurtw} alt="image" />
              <img className="m-4 w-10" src={Ptravel} alt="image" />
              <img className="m-4 w-17" src={Blinks} alt="image" />
            </div>
          </div>
          <div className="max-lg:w-[80%] w-[40%]">
            <p className="text-green-600 font-semibold text-sm">JOIN US ON</p>
            <div className="icon py-6 flex space-x-2">
              <a href="#" target={"_blank"}>
                <img src={faceboook} alt="faceboookIcon" />
              </a>
              <a href="#" target={"_blank"}>
                <img src={whatsapp} alt="whatsappIcon" />
              </a>
              <a href="#" target={"_blank"}>
                <img src={ins} alt="instagramIcon" />
              </a>
              <a href="#" target={"_blank"}>
                <img src={twitter} alt="twitterIcon" />
              </a>
              <a href="#" target={"_blank"}>
                <img src={linkdind} alt="linkdinIcon" />
              </a>
            </div>
            <p className="text-green-600 mt-6 font-semibold text-sm">DOWNLOAD & CONNECT WITH US</p>
            <div className="AandA py-8">
              <img src={appleandandroid} alt="appleandandroidIcon" />
            </div>
          </div>
        </div>

        <hr className="h-px bg-white my-6" />
        <div className="flex justify-center items-center">
            <div className="last flex items-center">
              <span>
                <img src={lastLogo} alt="lastLogo" className="w-32" />
              </span>
              <p className="ml-3 text-xs">
                Copyright © 2019-2022 Tembekasua Company S.L.
                All rights reserved.
              </p>
            </div>
            </div>
      </div>
    </div>
  </div>
</>
      
  );
};

export default Footer;
