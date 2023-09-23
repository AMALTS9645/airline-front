import React, { useEffect, useState } from "react";
import { InputTextComp } from "./InputTextComp";
import { IoIosAirplane } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getData, getRecommendation } from "../apis/FetchRoute";
import { useNavigate } from "react-router-dom";
import RecommendationComponent from "./RecommendationComponent";
import VirtualizedListArr from "./VirtualizedListArr";

export const FlightBookingFormComp = () => {
  const [way, setWay] = useState("oneway");
  const [dep, setDep] = useState("");
  const [arr, setArr] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);
  const [data, setData] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [recommendArr, setRecommendArr] = useState([]);
  const [depList, setDepList] = useState(true);
  const [arrList, setArrList] = useState(true);
  const [depFromClick, setdepFromClick] = useState("");
  const [arrFromClick, setarrFromClick] = useState("");

  const navigate = useNavigate();

  function formatDateToYYYYMMDD(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const fetchDetails = () => {
    // const body = {
    //   iatafrom: dep,
    //   iatato: arr,
    //   dateoftravel: formatDateToYYYYMMDD(selectedDate),
    //   class_business: 0,
    //   class_economy: 1,
    //   class_first: 0,
    // };
    // getData(body)
    //   .then((response) => setData(response.data()))
    //   .catch((response) => console.log(response));
    // navigate("/lists", {
    //   state: { data },
    // });
  };

  // Recommendation-Fetch-Departure________________________________________________________________________
  const handleSetDepFromClick = (val) => {
    setdepFromClick(val);
  };

  const handleSetDeparture = (e) => {
    setDep(e.target.value);
    setDepList(true);
  };

  useEffect(() => {
    const body = {
      search_string: dep,
      limit: 10,
    };

    getRecommendation(body)
      .then((response) => {
        setRecommend(response.data);
      })
      .catch((response) => console.log(response));
  }, [dep]);

  useEffect(() => {
    setDep(depFromClick);
  }, [depFromClick]);

  // Recommendation-Fetch-Arrival________________________________________________________________________
  const handleSetArrivalFromClick = (val) => {
    setarrFromClick(val);
  };

  const handleSetArrival = (e) => {
    setArr(e.target.value);
    setArrList(true);
  };

  useEffect(() => {
    const body = {
      search_string: arr,
      limit: 10,
    };
    getRecommendation(body)
      .then((response) => {
        setRecommendArr(response.data);
      })
      .catch((response) => console.log(response));
  }, [arr]);

  useEffect(() => {
    setArr(arrFromClick);
  }, [arrFromClick]);

  return (
    <div className="bg-white bg-opacity-20 w-[99%] rounded-3xl absolute bottom-12 shadow shadow-gray-300]">
      <div className="p-2">
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
          <p className="text-sm ml-3 text-yellow-400">One Way</p>
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
      <div className="p-3 flex justify-around">
        <div className="relative">
          <div
            className={`flex w-[270px] rounded border border-gray-300 px-3 flex justify-center items-center gap-2 bg-sky-900`}
          >
            <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
              <IoIosAirplane />
            </div>
            <input
              className="ml-3 w-[300px] outline-none border-none text-sm w-full rounded p-2 bg-sky-800 text-white"
              placeholder="Enter Boarding Point"
              value={dep}
              onChange={(e) => handleSetDeparture(e)}
            />
            <p className="text-sm text-yellow-500">From</p>
          </div>
          {dep.length > 0 && depList && (
            <div className="absolute">
              <RecommendationComponent
                recommendations={recommend}
                setDepList={setDepList}
                handleSetDepFromClick={handleSetDepFromClick}
              />
            </div>
          )}
        </div>

        <div className="relative">
          <div
            className={`flex w-[300px] rounded border border-gray-300 px-3 flex justify-center items-center gap-2 bg-sky-900`}
          >
            <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
              <IoIosAirplane />
            </div>
            <input
              className="ml-3 w-[300px] outline-none border-none text-sm w-full rounded p-2 bg-sky-800 text-white"
              placeholder="Enter Boarding Point"
              value={arr}
              onChange={(e) => handleSetArrival(e)}
            />
            <p className="text-sm text-yellow-500">To</p>
          </div>
          {arr.length > 0 && arrList && (
            <div className="absolute">
              <VirtualizedListArr
                recommendations={recommendArr}
                setArrList={setArrList}
                handleSetArrivalFromClick={handleSetArrivalFromClick}
              />
            </div>
          )}
        </div>

        <div
          className={`flex w-[310px] rounded border border-gray-300 px-3 flex justify-center items-center gap-1 bg-sky-900`}
        >
          <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
            <SlCalender />
          </div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select Date of Departure"
            className="rounded bg-sky-800 text-white"
          />
          <p className="text-sm text-yellow-500">Departure</p>
        </div>
        {way === "roundway" && (
          <div
            className={`flex w-[300px] rounded border border-gray-300 px-3 flex justify-center items-center gap-2 bg-sky-900`}
          >
            <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
              <SlCalender />
            </div>

            <DatePicker
              selected={selectedDateTwo}
              onChange={(date) => setSelectedDateTwo(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Date of Return"
              className="rounded bg-sky-800 text-white"
            />
            <p className="text-sm text-yellow-500">Return</p>
          </div>
        )}
      </div>
      <div className="px-5 m-2 flex items-center justify-center">
        <a href="#">
          <div className="py-2 px-5 bg-blue-500 text-sm rounded w-[200px]">
            <p className="text-white text-center" onClick={fetchDetails}>
              FIND FLIGHTS
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
