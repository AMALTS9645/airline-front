import React from "react";
import FlayInnImage from "../assets/flyinn.jpeg";
import { ButtonYellowComp } from "./ButtonYellowComp";
import { FlightBookingFormComp } from "./FlightBookingFormComp";
import { HeaderNavComp } from "./HeaderNavComp";
import AutoPlay from "./Carousel";

export const HeaderComp = () => {
  return (
    <div className="w-full h-[80%] bg-red-300 bg-contain">
      <HeaderNavComp />
      <div className="relative">
        <AutoPlay />
        <div className=" relative mt-8">
          <FlightBookingFormComp />
        </div>
      </div>
    </div>
  );
};
