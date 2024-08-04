import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Group 1 big .png";
import logo2 from "../assets/Group 1.png";

function SignupPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {" "}
      {/* Left Side - Logo */}{" "}
      <div className="bg-[#171B36] w-[720px] flex justify-center items-center">
        <img src={logo} alt="Logo" className="w-[377.66px] h-[209px]" />
      </div>{" "}
      {/* Right Side - Form */}{" "}
      <div className="bg-white flex-grow flex justify-center items-center">
        <div className="w-[552px]">
          <div className="mb-8 flex items-center space-x-4">
            <img src={logo2} alt="Book Rent" className="w-[59.63px] h-[33px]" />
            <h2 className="text-2xl font-normal"> Book Rent </h2>{" "}
          </div>{" "}
          <p className="flex text-black text-[24px] font-normal mb-1">
            Signup into Book Rent{" "}
          </p>{" "}
          <div className="h-px bg-gray-200 border-0 dark:bg-gray-200 w-[552px] mb-9" />
          <form>
            <div className="relative mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-0 peer"
                type="email"
                id="email"
                placeholder=""
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2.5 text-gray-600 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-blue-500"
              >
                Email address{" "}
              </label>{" "}
            </div>{" "}
            <div className="relative mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-0 peer"
                type="password"
                id="password"
                placeholder=""
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-2.5 text-gray-600 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-blue-500"
              >
                Password{" "}
              </label>{" "}
            </div>{" "}
            <div className="relative mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-0 peer"
                type="password"
                id="confirmPassword"
                placeholder=""
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-3 top-2.5 text-gray-600 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-blue-500"
              >
                Confirm Password{" "}
              </label>{" "}
            </div>{" "}
            <div className="relative mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-0 peer"
                type="text"
                id="location"
                placeholder=""
              />
              <label
                htmlFor="location"
                className="absolute left-3 top-2.5 text-gray-600 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-blue-500"
              >
                Location{" "}
              </label>{" "}
            </div>{" "}
            <div className="relative mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-0 peer"
                type="text"
                id="phoneNumber"
                placeholder=""
              />
              <label
                htmlFor="phoneNumber"
                className="absolute left-3 top-2.5 text-gray-600 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-blue-500"
              >
                Phone Number{" "}
              </label>{" "}
            </div>{" "}
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-black text-[16px]">
                I accept the Terms and Conditions{" "}
              </label>{" "}
            </div>{" "}
            <button
              type="button"
              onClick={handleLoginClick}
              className="w-full py-2 bg-[#00ABFF] text-white rounded text-[15px] shadow hover:shadow-lg transition-shadow duration-200"
            >
              SIGN IN{" "}
            </button>{" "}
          </form>{" "}
          <div className="text-center mt-4">
            <p>
              Already have an account ?{" "}
              <a href="#" onClick={handleLoginClick} className="text-blue-500">
                Login{" "}
              </a>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default SignupPage;
