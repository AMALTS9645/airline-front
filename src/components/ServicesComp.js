import React from "react";
import CoinImage from "../assets/coin.png";

export const ServicesComp = () => {
  return (
    <div className="h-[80%] px-20 py-20 mt-56">
      <div className="grid grid-cols-2 gap-2 h-[90%]">
        <div>
          <p className="text-sm">BEST CHOICE</p>
          <p className="text-3xl mt-1">
            Why Should<br></br>You Use
            <span className="text-[#3781c5]">
              {" "}
              Our <br></br>Services
            </span>
          </p>
          <div className="mt-5">
            <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
              <img src={CoinImage} className="w-[20px] h-[20px]" />
            </div>
            <p className="text-black text-lg mt-2">Easy Booking</p>
            <div className="w-[200px] mt-1">
              <p className="text-sm text-gray-400">
                We offer easy and convenient flight bookings with attractive
                offers.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="mt-5">
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={CoinImage} className="w-[20px] h-[20px]" />
              </div>
              <p className="text-black text-lg mt-2">Lowest Price</p>
              <div className="w-[200px] mt-1">
                <p className="text-sm text-gray-400">
                  We ensure low rates on hotel reservation, holiday packages and
                  on flight tickets.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={CoinImage} className="w-[20px] h-[20px]" />
              </div>
              <p className="text-black text-lg mt-2">Exciting Deals</p>
              <div className="w-[200px] mt-1">
                <p className="text-sm text-gray-400">
                  Enjoy exciting deals on flights, hotels, buses, car rental and
                  tour packages.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mt-5">
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={CoinImage} className="w-[20px] h-[20px]" />
              </div>
              <p className="text-black text-lg mt-2">24/7 Support</p>
              <div className="w-[200px] mt-1">
                <p className="text-sm text-gray-400">
                  Get assistance 24/7 on any kind of travel related query. We
                  are happy to assist you.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={CoinImage} className="w-[20px] h-[20px]" />
              </div>
              <p className="text-black text-lg mt-2">
                Get full Refund Instantly
              </p>
              <div className="w-[200px] mt-1">
                <p className="text-sm text-gray-400">
                  When you cancel International Flight for any reason
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
