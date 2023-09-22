import React, { useState } from "react";
import { InputTextComp } from "./InputTextComp";
import { IoIosAirplane } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getData, gerRecommendation } from "../apis/FetchRoute";
import { useNavigate } from "react-router-dom";

export const FlightBookingFormComp = () => {
  const [way, setWay] = useState("oneway");
  const [dep, setDep] = useState("");
  const [arr, setArr] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);
  const [data, setData] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const navigate = useNavigate();

  function formatDateToYYYYMMDD(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const fetchDetails = () => {
    const body = {
      iatafrom: dep,
      iatato: arr,
      dateoftravel: formatDateToYYYYMMDD(selectedDate),
      class_business: 0,
      class_economy: 1,
      class_first: 0,
    };

    getData(body)
      .then((response) => setData(response.data()))
      .catch((response) => console.log(response));

    navigate("/lists", {
      state: { data },
    });
  };

  const getrecommendationDetails = (value) => {
    setDep(value);
    const body = {
      search_string: dep,
      limit: 10,
    };

    gerRecommendation(body)
      .then((response) => setRecommend(response.data()))
      .catch((response) => console.log(response));
    console.log(recommend);
  };

  return (
    <div className="bg-white bg-opacity-70 w-[99%] rounded-3xl absolute bottom-12 shadow shadow-gray-300">
      <div className="p-3">
        <p className="font-semibold">
          Book <span className="text-yellow-400">Flights</span>
        </p>
      </div>
      <div className="flex bg-black text-white justify-center py-3 ">
        <div className="flex">
          <input
            className="text-white"
            type="radio"
            id="age1"
            name="age"
            value="30"
            onClick={(e) => setWay("oneway")}
          />
          <p className="text-sm ml-3">One Way</p>
        </div>
        <div className="flex ml-3">
          <input
            className="text-white"
            type="radio"
            id="age1"
            name="age"
            value="30"
            onClick={(e) => setWay("roundway")}
          />
          <p className="text-sm ml-3 text-yellow-400">Round Trip</p>
        </div>
      </div>
      <div className="p-5 flex ">
        <div
          className={`flex w-[300px] rounded border border-gray-300 px-3 py-3 mt-2`}
        >
          <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
            <IoIosAirplane />
          </div>
          <input
            className="ml-3 w-[300px] outline-none border-none text-sm w-full"
            placeholder="Enter Boarding Point"
            onChange={e=>getrecommendationDetails(e.target.value)}
          />
          <p className="text-sm text-yellow-600">From</p>
        </div>

        <div
          className={`flex w-[300px] rounded border border-gray-300 px-3 py-3 mt-2`}
        >
          <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
            <IoIosAirplane />
          </div>
          <input
            className="ml-3 w-[300px] outline-none border-none text-sm w-full"
            placeholder="Enter Destination"
            onChange={""}
          />
          <p className="text-sm text-yellow-600">To</p>
        </div>

        <div
          className={`flex w-[300px] rounded border border-gray-300 px-3 py-3 mt-2`}
        >
          <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
            <SlCalender />
          </div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
          />
          <p className="text-sm text-yellow-600">Departure</p>
        </div>

        <div
          className={`flex w-[300px] rounded border border-gray-300 px-3 py-3 mt-2`}
        >
          <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
            <SlCalender />
          </div>

          <DatePicker
            selected={selectedDateTwo}
            onChange={(date) => setSelectedDateTwo(date)}
            dateFormat="yyyy-MM-dd"
          />
          <p className="text-sm text-yellow-600">Return</p>
        </div>
      </div>
      <div className="px-5 mt-5">
        <a href="#">
          <div className="py-2 px-5 bg-blue-500 text-sm rounded">
            <p className="text-white text-center" onClick={fetchDetails}>
              FIND FLIGHTS
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
