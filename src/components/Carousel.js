import React, { Component } from "react";
import Slider from "react-slick";
import { ButtonYellowComp } from "./ButtonYellowComp";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div className="relative">
        <Slider {...settings}>
          <div className="relative w-full h-[600px]">
            <img
              className="w-full h-[500px] absolute z-10"
              src="https://r4.wallpaperflare.com/wallpaper/802/367/658/the-sky-clouds-flight-the-plane-wallpaper-eddb8cb4a673418ef863808099af6cf6.jpg"
            ></img>
            <div className="flex p-5 items-center absolute m-0 z-30">
              <div>
                <p className="text-white text-xl">SkyWing</p>
                <p className="text-white text-5xl">Wings of Convenience</p>
                <p className="text-yellow-400 text-5xl">
                  Change the Way you Travel
                </p>
                <p className="text-white text-sm mt-3">
                  <span className="text-yellow-400">SkyWing</span> is the
                  versatile website expowering you
                </p>
                <p className="text-white text-sm">
                  full services airline offering{" "}
                  <span className="text-yellow-400">reduce fairs.</span>
                </p>
                <ButtonYellowComp
                  label={"FIND FLIGHT"}
                  extraStyle={"flex mt-5"}
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-[500px]">
            <img
              className="w-full h-[500px] absolute z-10"
              src="https://images.pexels.com/photos/2026398/pexels-photo-2026398.jpeg"
            ></img>
            <div className="flex p-5 items-center absolute m-0 z-30">
              <div>
                <p className="text-white text-xl">SkyWing</p>
                <p className="text-white text-5xl">Wings of Convenience</p>
                <p className="text-yellow-400 text-5xl">
                  Change the Way you Travel
                </p>
                <p className="text-white text-sm mt-3">
                  <span className="text-yellow-400">SkyWing</span> is the
                  versatile website expowering you
                </p>
                <p className="text-white text-sm">
                  full services airline offering{" "}
                  <span className="text-yellow-400">reduce fairs.</span>
                </p>
                <ButtonYellowComp
                  label={"FIND FLIGHT"}
                  extraStyle={"flex mt-5"}
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-[500px]">
            <img
              className="w-full h-[500px] absolute z-10"
              src="https://images.pexels.com/photos/113017/pexels-photo-113017.jpeg"
            ></img>
            <div className="flex p-5 items-center absolute m-0 z-30">
              <div>
                <p className="text-white text-xl">SkyWing</p>
                <p className="text-white text-5xl">Wings of Convenience</p>
                <p className="text-yellow-400 text-5xl">
                  Change the Way you Travel
                </p>
                <p className="text-white text-sm mt-3">
                  <span className="text-yellow-400">SkyWing</span> is the
                  versatile website expowering you
                </p>
                <p className="text-white text-sm">
                  full services airline offering{" "}
                  <span className="text-yellow-400">reduce fairs.</span>
                </p>
                <ButtonYellowComp
                  label={"FIND FLIGHT"}
                  extraStyle={"flex mt-5"}
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-[500px]">
            <img
              className="w-full h-[500px] absolute z-10"
              src="https://images.pexels.com/photos/674783/pexels-photo-674783.jpeg"
            ></img>
            <div className="flex p-5 items-center absolute m-0 z-30">
              <div>
                <p className="text-white text-xl">SkyWing</p>
                <p className="text-white text-5xl">Wings of Convenience</p>
                <p className="text-yellow-400 text-5xl">
                  Change the Way you Travel
                </p>
                <p className="text-white text-sm mt-3">
                  <span className="text-yellow-400">SkyWing</span> is the
                  versatile website expowering you
                </p>
                <p className="text-white text-sm">
                  full services airline offering{" "}
                  <span className="text-yellow-400">reduce fairs.</span>
                </p>
                <ButtonYellowComp
                  label={"FIND FLIGHT"}
                  extraStyle={"flex mt-5"}
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-[500px]">
            <img
              className="w-full h-[500px] absolute z-10"
              src="https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg"
            ></img>
            <div className="flex p-5 items-center absolute m-0 z-30">
              <div>
                <p className="text-white text-xl">SkyWing</p>
                <p className="text-white text-5xl">Wings of Convenience</p>
                <p className="text-yellow-400 text-5xl">
                  Change the Way you Travel
                </p>
                <p className="text-white text-sm mt-3">
                  <span className="text-yellow-400">SkyWing</span> is the
                  versatile website expowering you
                </p>
                <p className="text-white text-sm">
                  full services airline offering{" "}
                  <span className="text-yellow-400">reduce fairs.</span>
                </p>
                <ButtonYellowComp
                  label={"FIND FLIGHT"}
                  extraStyle={"flex mt-5"}
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-[500px]">
            <img
              className="w-full h-[500px] absolute z-10"
              src="https://engelska.kontainer.com/cdn/xZcbXg/airplane.jpg"
            ></img>
            <div className="flex p-5 items-center absolute m-0 z-30">
              <div>
                <p className="text-white text-xl">SkyWing</p>
                <p className="text-white text-5xl">Wings of Convenience</p>
                <p className="text-yellow-400 text-5xl">
                  Change the Way you Travel
                </p>
                <p className="text-white text-sm mt-3">
                  <span className="text-yellow-400">SkyWing</span> is the
                  versatile website expowering you
                </p>
                <p className="text-white text-sm">
                  full services airline offering{" "}
                  <span className="text-yellow-400">reduce fairs.</span>
                </p>
                <ButtonYellowComp
                  label={"FIND FLIGHT"}
                  extraStyle={"flex mt-5"}
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
