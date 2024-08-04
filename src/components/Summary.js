import React from "react";
import arrow from "../assets/arrow.png";
import chart from "../assets/Chart.png";

function Summary() {
  return (
    <div className="pl-10 font-inter">
      <div className="bg-white w-[908px] h-[330px] rounded-[8px] gap-[25px]">
        <div className="p-10 flex items-center">
          <span className="font-semibold text-[16px]"> Earning Summary </span>{" "}
          <span className="text-[12px] pl-8 text-[#656575]">
            {" "}
            Mar 2022 - Oct 2024{" "}
          </span>{" "}
          <span className="bg-white  pl-3 items-center justify-center flex">
            <img src={arrow} alt="" />
          </span>{" "}
          <span className="flex items-center ml-40">
            <div className="bg-blue-500 w-3 h-3 rounded-full" />
            <div className="text-[12px] font-normal pl-1">
              {" "}
              Last 6 months{" "}
            </div>{" "}
          </span>{" "}
          <span className="flex items-center ml-4">
            <div className="bg-[#656575] w-3 h-3 rounded-full" />
            <div className="text-[12px] font-normal pl-1">
              {" "}
              Same period last year{" "}
            </div>{" "}
          </span>{" "}
        </div>{" "}
        <div className="pl-10">
          <img src={chart} alt="" />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Summary;
