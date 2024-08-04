// Navbar.js
import React from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathName = location.pathname;

  let pageTitle = "Dashboard";
  if (pathName === "/books") {
    pageTitle = "Books";
  }

  return (
    <div className="fixed top-0 left-[280px] right-0 flex justify-center items-center p-4 font-inter">
      <div className="w-full h-[67px] bg-white rounded-[15px] flex justify-start">
        <div className="flex-grow text-left font-inter my-auto ml-[49px] text-[22px]">
          <span className="font-bold"> Admin </span>{" "}
          <span className="font-light"> / {pageTitle}</span>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Navbar;
