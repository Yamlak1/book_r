import React from "react";
import { BiBold } from "react-icons/bi";
import pieChart from "../assets/Pie chart.png";

function MonthStat() {
  return (
    <div className="pt-6 pl-10 flex flex-row font-inter">
      <div className="w-[318px] bg-white h-[788px] rounded-[15px] text-[20px] pt-9 pl-4 font-[20px]">
        This Month Statistics{" "}
        <div className="text-[14px] font-[14px] text-[#A3A3A3]">
          Tue, 14 Nov, 2024, 11.30 AM{" "}
        </div>{" "}
        <div className="w-[288px] h-[190px] bg-white mt-10 shadow-lg flex flex-col ">
          <div className="flex justify-between p-4 border-b w-[240px] h-[55px] mx-auto">
            <span
              style={{
                fontSize: "18px",
              }}
            >
              {" "}
              Income{" "}
            </span>{" "}
            <span className="bg-[#F4F5F7] px-2 py-1 rounded w-[80px] h-[24px] items-center justify-center flex">
              <span style={{ fontSize: "12px" }}> This Month </span>{" "}
            </span>{" "}
          </div>{" "}
          <div className="p-4">
            <span style={{ fontSize: "28px", fontWeight: "bold" }}>
              ETB 9460.00{" "}
            </span>{" "}
            <span style={{ fontSize: "16px", color: "red" }}> ↓1.5 % </span>{" "}
          </div>{" "}
          <div className="pl-4 text-[14px] font-light text-[#656575]">
            {" "}
            Compared to ETB9940 last month{" "}
          </div>{" "}
          <div className="pl-4 text-[14px] font-medium">
            {" "}
            <span> Last Month Income </span>{" "}
            <span className="p-4"> ETB 25658.00 </span>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-[288px] h-[360px] bg-white mt-10 shadow-lg flex flex-col ">
          <div className="flex justify-between pl-1 pt-3 w-[240px] h-[55px] mx-auto">
            <span
              style={{
                fontSize: "18px",
              }}
            >
              {" "}
              Available Books{" "}
            </span>{" "}
            <span className="bg-[#F4F5F7] px-1 py-1 rounded w-[80px] h-[24px] items-center justify-center flex">
              <span style={{ fontSize: "12px" }}> today </span>{" "}
            </span>{" "}
          </div>{" "}
          <div className="items-center justify-center flex pt-2">
            <div className="w-[146px] h-[146px]">
              <img src={pieChart} alt="" />
            </div>{" "}
          </div>{" "}
          <div className="flex items-center gap-3 pl-4 pt-4 text-[16px]">
            <div className=" w-4 h-4 bg-blue-600 rounded-full" />
            <span> Fiction </span> <span className="pl-16"> 54 </span>{" "}
          </div>{" "}
          <div className="flex items-center gap-3 pl-4 pt-4 text-[16px]">
            <div className=" w-4 h-4 bg-green-600 rounded-full" />
            <span> Self Help </span> <span className="pl-16"> 20 </span>{" "}
          </div>{" "}
          <div className="flex items-center gap-3 pl-4 pt-4 text-[16px]">
            <div className=" w-4 h-4 bg-red-600 rounded-full" />
            <span> Business </span> <span className="pl-16"> 26 </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default MonthStat;
