import React from "react";
import { FaSearch } from "react-icons/fa";
import filterIcon from "../assets/filterIcon.png";
import barsIcon from "../assets/barsIcon.png";
import unionIcon from "../assets/Union.png";
import equalizer from "../assets/equ.png";

const data = [
  {
    id: 1,
    bookNo: "6465",
    owner: "Nardos T",
    status: "Rented",
    price: "40 Birr",
    ownerImage: "https://via.placeholder.com/40",
    statusColor: "red",
  },
  {
    id: 2,
    bookNo: "6465",
    owner: "Nardos T",
    status: "Rented",
    price: "40 Birr",
    ownerImage: "https://via.placeholder.com/40",
    statusColor: "red",
  },
  {
    id: 3,
    bookNo: "6465",
    owner: "Nardos T",
    status: "Rented",
    price: "40 Birr",
    ownerImage: "https://via.placeholder.com/40",
    statusColor: "red",
  },
  {
    id: 4,
    bookNo: "5665",
    owner: "Harry M",
    status: "Free",
    price: "0.0 Birr",
    ownerImage: "https://via.placeholder.com/40",
    statusColor: "blue",
  },
  {
    id: 5,
    bookNo: "5665",
    owner: "Harry M",
    status: "Free",
    price: "0.0 Birr",
    ownerImage: "https://via.placeholder.com/40",
    statusColor: "blue",
  },
  {
    id: 6,
    bookNo: "1755",
    owner: "Tesfu N",
    status: "Free",
    price: "0.0 Birr",
    ownerImage: "https://via.placeholder.com/40",
    statusColor: "blue",
  },
];

function LiveBook() {
  return (
    <div className=" pl-10 font-inter">
      <div className="bg-white w-[908px] h-[546px] mt-7 rounded-[8px] p-10  overflow-hidden">
        <div className="text-lg items-center justify-end flex gap-5">
          <FaSearch />
          <img src={filterIcon} alt="Filter Icon" />
          <img src={barsIcon} alt="Bars Icon" />
          <img src={unionIcon} alt="Union Icon" />
          <img src={equalizer} alt="Equalizer Icon" />
        </div>{" "}
        <div className="pt-3 w-full text-xl font-bold"> Live Book Status </div>{" "}
        <div className="overflow-auto max-h-[400px] mt-5">
          <table className="min-w-full bg-white mt-5">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-6 text-left text-xs font-medium text-[#656575] uppercase tracking-wider">
                  No.{" "}
                </th>{" "}
                <th className="py-3 px-6 text-left text-xs font-medium text-[#656575] uppercase tracking-wider">
                  Book No.{" "}
                </th>{" "}
                <th className="py-3 px-6 text-left text-xs font-medium text-[#656575] uppercase tracking-wider">
                  Owner{" "}
                </th>{" "}
                <th className="py-3 px-6 text-left text-xs font-medium text-[#656575] uppercase tracking-wider">
                  Status{" "}
                </th>{" "}
                <th className="py-3 px-6 text-left text-xs font-medium text-[#656575] uppercase tracking-wider">
                  Price{" "}
                </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody className="bg-white divide-y divide-gray-200">
              {" "}
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {" "}
                    {String(index + 1).padStart(2, "0")}{" "}
                  </td>{" "}
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {" "}
                    {item.bookNo}{" "}
                  </td>{" "}
                  <td className="py-4 px-6 text-sm text-gray-900 flex items-center">
                    {" "}
                    <img
                      src={item.ownerImage}
                      alt={item.owner}
                      className="w-8 h-8 rounded-full mr-2"
                    />{" "}
                    {item.owner}{" "}
                  </td>{" "}
                  <td className="py-4 px-6 text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full  bg-${item.statusColor}-500`}
                      />{" "}
                      {item.status}{" "}
                    </div>{" "}
                  </td>{" "}
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {" "}
                    {item.price}{" "}
                  </td>{" "}
                </tr>
              ))}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default LiveBook;
