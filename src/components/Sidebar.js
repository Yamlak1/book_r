// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaUser,
  FaEllipsisH,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../assets/Group 1.png"; // Replace with your logo path

const Sidebar = () => {
  return (
    <div className="w-[260px] bg-[#fff] flex flex-col my-[30px] ml-5">
      <div className="h-full bg-[#171B36] flex flex-col p-4 rounded-[15px]">
        <div className="flex p-2 mb-8">
          <div className="flex flex-col gap-1 mr-5">
            <div className="h-[3px] bg-gray-200 dark:bg-gray-200 w-[24px] rounded-sm" />
            <div className="h-[3px] bg-gray-200 dark:bg-gray-200 w-[24px] rounded-sm" />
            <div className="h-[3px] bg-gray-200 dark:bg-gray-200 w-[24px] rounded-sm" />
          </div>{" "}
          <img src={logo} alt="Logo" className="w-[37.95px] h-[21px]" />
          <h2 className="text-xl ml-2 text-[#00ABFF] font-normal text-[16px]">
            Book Rent{" "}
          </h2>{" "}
        </div>{" "}
        <div className="h-px bg-gray-600 w-[230px]" />
        <nav className="flex mt-5">
          <ul className="space-y-2 w-full">
            <li>
              <Link
                to="/"
                className="flex items-center text-white text-sm px-4 py-3 hover:bg-[#00ABFF] rounded"
              >
                <FaHome className="mr-3" />
                Dashboard{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link
                to="/books"
                className="flex items-center text-white text-sm px-4 py-3 hover:bg-[#00ABFF] rounded"
              >
                <FaBook className="mr-3" />
                Books{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center text-white text-sm px-4 py-3 hover:bg-[#00ABFF] rounded"
              >
                <FaUser className="mr-3" />
                Owners{" "}
              </a>{" "}
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center text-white text-sm px-4 py-3 hover:bg-[#00ABFF] rounded"
              >
                <FaEllipsisH className="mr-3" />
                Other{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
        <div className="h-px bg-gray-600 w-[230px] mt-3" />
        <div className="flex mt-5">
          <ul className="space-y-2 w-full">
            <li>
              <a
                href="#"
                className="flex items-center text-white text-sm px-4 py-3 hover:bg-[#00ABFF] rounded"
              >
                <FaBell className="mr-3" />
                Notification{" "}
              </a>{" "}
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center text-white text-sm px-4 py-3 hover:bg-[#00ABFF] rounded"
              >
                <FaCog className="mr-3" />
                Setting{" "}
              </a>{" "}
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center text-white text-sm px-4 py-3 hover:bg-[#00ABFF] rounded"
              >
                <FaUser className="mr-3" />
                Login as Book Owner{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="h-px bg-gray-600 w-[230px] mt-3" />
        <div className="mt-auto">
          <ul className="space-y-2 flex items-center justify-center w-full">
            <li>
              <a
                href="#"
                className="flex items-center justify-center bg-[#4e4e4e] text-white w-[230px] font-medium text-[18px] text-sm px-4 py-3 hover:bg-[#00ABFF] rounded"
              >
                <FaSignOutAlt className="mr-3" />
                Logout{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Sidebar;
