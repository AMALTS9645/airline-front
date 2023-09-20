import React from "react";
import { ButtonYellowComp } from "./ButtonYellowComp";

export const ProfessionalExpComp = () => {
  return (
    <div className="h-[80%] px-20 py-[140px] my-[50px]">
      <div class="grid grid-cols-2 gap-5 h-[90%]">
        <div className="flex justify-center">
          <div
            className="bg-contain w-[250px] h-[350px] rounded"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/17291197/pexels-photo-17291197/free-photo-of-travelers-waiting-on-boarding-at-airport.jpeg")`,
            }}
          ></div>
        </div>
        <div>
          <div>
            <div>
              <p className="text-sm">BEST CHOICE</p>
              <p className="text-3xl mt-1">
                We Are Very Reliable<br></br>
                <span className="text-[#3781c5]">
                  {" "}
                  Professional, Experienced
                </span>
              </p>
            </div>
          </div>

          <p className="mt-3">
            We understand that planning a trip can be overwhelming, so we have
            simplified the process to make it easy for you to find the perfect
            travel deals that suit your needs.
          </p>
          <p className="mt-5">
            With SkyWing, you can be assured of getting the best travel deals in
            the market. If you're looking for a hassle-free and affordable way
            to plan your next trip, look no further than SkyWing. We promise to
            make your travel experience a memorable one.
          </p>
          <div className="flex">
            <ButtonYellowComp label={"Read More"} extraStyle={"mt-10"} />
          </div>
        </div>
      </div>
    </div>
  );
};
