import React, { useState } from "react";
import { Link } from "react-router-dom";
import websiteLogo from "../assets/websiteLogo.png";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { BiLogoAdobe } from "react-icons/bi"

// import ADD_TO_CARD from "../Assets/basket-icon.png";

const Navigationbar = () => {
  const [showSignUpComponent, setShowSignUpComponent] = useState(false);
  const [handleSignInComponent, setHandleSignInComponent] = useState(false);

  const handleCreateAccountClick = () => {
    setShowSignUpComponent(true);
  };

  const handleCreateAccountClose = () => {
    setShowSignUpComponent(false);
  };

  const handleSignInButtonClick = () => {
    setHandleSignInComponent(true);
  };

  const handleSignInClose = () => {
    setHandleSignInComponent(false);
  };

  return (
    <div>
      <div className="flex flex-row justify-between pr-4 pl-4 sm:pr-20 sm:pl-20 items-center h-28 bg-gray-100 border-b border-black">
        <div className="cursor-pointer">
          <Link to="/">
            {/* <img src={websiteLogo} alt="websiteLogo" className="w-28 md:w-32" /> */}
            <BiLogoAdobe className="text-3xl md:text-7xl" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-2 sm:space-x-4 ">
          <input
            className="bg-gray-200 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
            type="text"
            id="navinput"
            name="search"
            placeholder="Search food items, classification and categories"
          />
          <button
            className="rounded-md px-4 py-2 border bg-green-700 text-white text-base font-semibold cursor-pointer"
            style={{ margin: 0 }}
          >
            Search
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <div
            className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer "
            style={{ marginRight: "12px" }}
          >
            <AiFillHeart className="text-2xl" />
          </div>
          <div
            className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer "
            style={{ marginRight: "12px" }}
          >
            <FaCartPlus className="text-xl" />
          </div>
          <button
            className="max-sm:hidden rounded-md px-4 py-2 bg-green-700 text-white text-base font-semibold cursor-pointer "
            style={{ marginRight: "12px" }}
            onClick={handleCreateAccountClick}
          >
            Create Account
          </button>
          <button
            className="max-sm:hidden rounded-md px-3 py-2 border bg-gray-400 text-white text-base font-semibold cursor-pointer"
            style={{ marginRight: "12px" }}
            onClick={handleSignInButtonClick}
          >
            Sign in
          </button>
        </div>
      </div>

      {showSignUpComponent && (
        <SignUp handleCreateAccountClose={handleCreateAccountClose} />
      )}

      {handleSignInComponent && (
        <SignIn handleSignInClose={handleSignInClose} />
      )}
    </div>
  );
};

export default Navigationbar;
