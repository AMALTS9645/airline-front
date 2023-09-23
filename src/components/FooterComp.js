import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const FooterComp = () => {
  return (
    <div className="h-[50%] px-7 py-5 bg-slate-600">
      <div class="flex justify-between w-full text-white mt-5 text-sm ">
        <div>
          <div class="flex">
            <img src="logo.png" className="w-[60px] h-[60px] mt-5  " />

            <p className="text-2xl font-bold mt-7 ">SkyWing</p>
          </div>

          <div className="flex h-14 items-center mt-7">
            <a href="#">
              <BsFacebook size={40} />
            </a>

            <a href="#">
              {" "}
              <AiFillTwitterCircle size={40} className="ml-2" />
            </a>

            <a href="#">
              {" "}
              <AiFillInstagram size={40} className="ml-2" />
            </a>

            <a href="#">
              {" "}
              <AiFillLinkedin size={40} className="ml-2" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Get in Touch</p>

          <div className="items-center mt-2">
            <p className="text-sm ml-2">Phone: +91 9645386556</p>

            <p className="text-sm ml-2">Email: techtitans@gmail.com</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Our Network</p>

          <div className="items-center mt-2">
            <p className="text-sm ml-2">Middle East</p>

            <p className="text-sm ml-2">Asia</p>

            <p className="text-sm ml-2">Africa</p>

            <p className="text-sm ml-2">Europe</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">About US</p>

          <div className="items-center mt-2">
            <p className="text-sm ml-2">About SkyWing</p>

            <p className="text-sm ml-2">Leaders</p>

            <p className="text-sm ml-2">Careers</p>

            <p className="text-sm ml-2">SkyTeam partners</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Help</p>

          <div className="items-center mt-2">
            <p className="text-sm ml-2">Frequently Asked Questions</p>

            <p className="text-sm ml-2">Contact us</p>

            <p className="text-sm ml-2">Worldwide offices</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Manage</p>

          <div className="items-center mt-2">
            <p className="text-sm ml-2">Change or Cancel Flights</p>

            <p className="text-sm ml-2">Upgrade flights</p>

            <p className="text-sm ml-2">Refunds</p>

            <p className="text-sm ml-2">Extra baggage</p>

            <p className="text-sm ml-2">Seats reservation</p>

            <p className="text-sm ml-2">Meal selection</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex justify-between w-full text-white mt-5 text-sm h-[10%]">
        <p>Terms & conditions</p>

        <p>Cookies policy</p>

        <p>Privacy</p>

        <p>Accessibility</p>

        <p>Passenger rights</p>

        <p>Service agreement</p>

        <p>Sitemap</p>

        <p>© 2023 SkyWing · All Rights Reserved.</p>
      </div>
    </div>
  );
};
