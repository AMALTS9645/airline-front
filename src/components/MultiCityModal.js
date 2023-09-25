import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { IoIosAirplane } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RecommendationComponent from "./RecommendationComponent";
import VirtualizedListArr from "./VirtualizedListArr";
import { getMultiCity, getRecommendation } from "../apis/FetchRoute";
import ListItem from "./ListItem";
import BasicModalCity from "./ListItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1250,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  borderRadius: "7px",
};

export default function MultiCityModal() {
  const [open, setOpen] = React.useState(false);
  //   const [dataItem, setDataItem] = React.useState([]);
  //   const [empty, setEmpty] = React.useState(false);

  const [dep, setDep] = useState("");
  const [dep2, setDep2] = useState("");
  const [dep3, setDep3] = useState("");
  const [dep4, setDep4] = useState("");

  const [arr, setArr] = useState("");
  const [arr2, setArr2] = useState("");
  const [arr3, setArr3] = useState("");
  const [arr4, setArr4] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [selectedDate4, setSelectedDate4] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);
  const [selectedDateTwo2, setSelectedDateTwo2] = useState(null);
  const [selectedDateTwo3, setSelectedDateTwo3] = useState(null);
  const [selectedDateTwo4, setSelectedDateTwo4] = useState(null);

  const [recommend, setRecommend] = useState([]);
  const [recommend2, setRecommend2] = useState([]);
  const [recommend3, setRecommend3] = useState([]);
  const [recommend4, setRecommend4] = useState([]);

  const [recommendArr, setRecommendArr] = useState([]);
  const [recommendArr2, setRecommendArr2] = useState([]);
  const [recommendArr3, setRecommendArr3] = useState([]);
  const [recommendArr4, setRecommendArr4] = useState([]);

  const [depList, setDepList] = useState(true);
  const [depList2, setDepList2] = useState(true);
  const [depList3, setDepList3] = useState(true);
  const [depList4, setDepList4] = useState(true);

  const [arrList, setArrList] = useState(true);
  const [arrList2, setArrList2] = useState(true);
  const [arrList3, setArrList3] = useState(true);
  const [arrList4, setArrList4] = useState(true);

  const [depFromClick, setdepFromClick] = useState("");
  const [depFromClick2, setdepFromClick2] = useState("");
  const [depFromClick3, setdepFromClick3] = useState("");
  const [depFromClick4, setdepFromClick4] = useState("");

  const [arrFromClick, setarrFromClick] = useState("");
  const [arrFromClick2, setarrFromClick2] = useState("");
  const [arrFromClick3, setarrFromClick3] = useState("");
  const [arrFromClick4, setarrFromClick4] = useState("");
  const [classes, setClasses] = useState("");
  const [count, setCount] = useState(1);
  const [data, setData] = useState([{}]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   React.useEffect(() => {
  //     if (data.length > 0) {
  //       setEmpty(false);
  //       setDataItem(data);
  //     } else {
  //       setEmpty(true);
  //     }
  //   }, [data]);

  function formatDateToYYYYMMDD(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  // Recommendation-Fetch-Departure________________________________________________________________________
  const handleSetDepFromClick = (val) => {
    setdepFromClick(val);
  };
  const handleSetDepFromClick2 = (val) => {
    setdepFromClick2(val);
  };
  const handleSetDepFromClick3 = (val) => {
    setdepFromClick3(val);
  };
  const handleSetDepFromClick4 = (val) => {
    setdepFromClick4(val);
  };

  const handleSetDeparture = (e) => {
    setDep(e.target.value);
    setDepList(true);
  };
  const handleSetDeparture2 = (e) => {
    setDep2(e.target.value);
    setDepList2(true);
  };
  const handleSetDeparture3 = (e) => {
    setDep3(e.target.value);
    setDepList3(true);
  };
  const handleSetDeparture4 = (e) => {
    setDep4(e.target.value);
    setDepList4(true);
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
    const body = {
      search_string: dep2,
      limit: 10,
    };

    getRecommendation(body)
      .then((response) => {
        setRecommend2(response.data);
      })
      .catch((response) => console.log(response));
  }, [dep2]);
  useEffect(() => {
    const body = {
      search_string: dep3,
      limit: 10,
    };

    getRecommendation(body)
      .then((response) => {
        setRecommend3(response.data);
      })
      .catch((response) => console.log(response));
  }, [dep3]);

  useEffect(() => {
    const body = {
      search_string: dep4,
      limit: 10,
    };

    getRecommendation(body)
      .then((response) => {
        setRecommend4(response.data);
      })
      .catch((response) => console.log(response));
  }, [dep4]);

  useEffect(() => {
    setDep(depFromClick);
  }, [depFromClick]);

  useEffect(() => {
    setDep2(depFromClick2);
  }, [depFromClick2]);

  useEffect(() => {
    setDep3(depFromClick3);
  }, [depFromClick3]);

  useEffect(() => {
    setDep4(depFromClick4);
  }, [depFromClick4]);

  // Recommendation-Fetch-Arrival________________________________________________________________________
  const handleSetArrivalFromClick = (val) => {
    setarrFromClick(val);
  };
  const handleSetArrivalFromClick2 = (val) => {
    setarrFromClick2(val);
  };
  const handleSetArrivalFromClick3 = (val) => {
    setarrFromClick3(val);
  };
  const handleSetArrivalFromClick4 = (val) => {
    setarrFromClick4(val);
  };

  const handleSetArrival = (e) => {
    setArr(e.target.value);
    setArrList(true);
  };
  const handleSetArrival2 = (e) => {
    setArr2(e.target.value);
    setArrList2(true);
  };
  const handleSetArrival3 = (e) => {
    setArr3(e.target.value);
    setArrList3(true);
  };
  const handleSetArrival4 = (e) => {
    setArr4(e.target.value);
    setArrList4(true);
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
    const body = {
      search_string: arr2,
      limit: 10,
    };
    getRecommendation(body)
      .then((response) => {
        setRecommendArr2(response.data);
      })
      .catch((response) => console.log(response));
  }, [arr2]);

  useEffect(() => {
    const body = {
      search_string: arr3,
      limit: 10,
    };
    getRecommendation(body)
      .then((response) => {
        setRecommendArr3(response.data);
      })
      .catch((response) => console.log(response));
  }, [arr3]);

  useEffect(() => {
    const body = {
      search_string: arr4,
      limit: 10,
    };
    getRecommendation(body)
      .then((response) => {
        setRecommendArr4(response.data);
      })
      .catch((response) => console.log(response));
  }, [arr4]);

  useEffect(() => {
    setArr(arrFromClick);
  }, [arrFromClick]);

  useEffect(() => {
    setArr2(arrFromClick2);
  }, [arrFromClick2]);

  useEffect(() => {
    setArr3(arrFromClick3);
  }, [arrFromClick3]);

  useEffect(() => {
    setArr4(arrFromClick4);
  }, [arrFromClick4]);

  const handleIncrement = () => {
    if (count < 4) setCount(count + 1);
    // console.log(count);
  };
  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
    // console.log(count);
  };

  const handleMultyCity = () => {
    const body = {
      classfields: [...classes],
      airlines: [],
      routes: [
        {
          date: formatDateToYYYYMMDD(selectedDate),
          departure: dep,
          arrival: arr,
        },
        {
          date: formatDateToYYYYMMDD(selectedDate2),
          departure: arr,
          arrival: arr2,
        },
        {
          date: formatDateToYYYYMMDD(selectedDate3),
          departure: arr2,
          arrival: arr3,
        },
        {
          date: formatDateToYYYYMMDD(selectedDate4),
          departure: arr3,
          arrival: arr4,
        },
      ],
    };

    getMultiCity(body)
      .then((response) => setData(response.data))
      .catch((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <p className="text-sm ml-3 text-yellow-400" onClick={handleOpen}>
        Multi City
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between">
            <div className="fixed">
              <AiFillCloseCircle
                className="text-2xl cursor-pointer fixed top-0 right-0"
                onClick={handleClose}
              />
            </div>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {count >= 1 && (
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
                    <div className="absolute z-20">
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
                    <div className="absolute z-20">
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
              </div>
            )}

            {count > 1 && (
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
                      value={arr}
                      onChange={(e) => handleSetDeparture2(e)}
                    />
                    <p className="text-sm text-yellow-500">From</p>
                  </div>
                  {dep2.length > 0 && depList2 && (
                    <div className="absolute z-20">
                      <RecommendationComponent
                        recommendations={recommend2}
                        setDepList={setDepList2}
                        handleSetDepFromClick={handleSetDepFromClick2}
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
                      value={arr2}
                      onChange={(e) => handleSetArrival2(e)}
                    />
                    <p className="text-sm text-yellow-500">To</p>
                  </div>
                  {arr2.length > 0 && arrList2 && (
                    <div className="absolute z-20">
                      <VirtualizedListArr
                        recommendations={recommendArr2}
                        setArrList={setArrList2}
                        handleSetArrivalFromClick={handleSetArrivalFromClick2}
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
                    selected={selectedDate2}
                    onChange={(date) => setSelectedDate2(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select Date of Departure"
                    className="rounded bg-sky-800 text-white"
                  />
                  <p className="text-sm text-yellow-500">Departure</p>
                </div>
              </div>
            )}

            {count > 2 && (
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
                      value={arr2}
                      onChange={(e) => handleSetDeparture3(e)}
                    />
                    <p className="text-sm text-yellow-500">From</p>
                  </div>
                  {dep3.length > 0 && depList3 && (
                    <div className="absolute z-20">
                      <RecommendationComponent
                        recommendations={recommend3}
                        setDepList={setDepList3}
                        handleSetDepFromClick={handleSetDepFromClick3}
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
                      value={arr3}
                      onChange={(e) => handleSetArrival3(e)}
                    />
                    <p className="text-sm text-yellow-500">To</p>
                  </div>
                  {arr3.length > 0 && arrList3 && (
                    <div className="absolute z-20">
                      <VirtualizedListArr
                        recommendations={recommendArr3}
                        setArrList={setArrList3}
                        handleSetArrivalFromClick={handleSetArrivalFromClick3}
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
                    selected={selectedDate3}
                    onChange={(date) => setSelectedDate3(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select Date of Departure"
                    className="rounded bg-sky-800 text-white"
                  />
                  <p className="text-sm text-yellow-500">Departure</p>
                </div>
              </div>
            )}

            {count >= 4 && (
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
                      value={arr3}
                      onChange={(e) => handleSetDeparture4(e)}
                    />
                    <p className="text-sm text-yellow-500">From</p>
                  </div>
                  {dep4.length > 0 && depList4 && (
                    <div className="absolute z-20">
                      <RecommendationComponent
                        recommendations={recommend4}
                        setDepList={setDepList4}
                        handleSetDepFromClick={handleSetDepFromClick4}
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
                      value={arr4}
                      onChange={(e) => handleSetArrival4(e)}
                    />
                    <p className="text-sm text-yellow-500">To</p>
                  </div>
                  {arr4.length > 0 && arrList4 && (
                    <div className="absolute z-20">
                      <VirtualizedListArr
                        recommendations={recommendArr4}
                        setArrList={setArrList4}
                        handleSetArrivalFromClick={handleSetArrivalFromClick4}
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
                    selected={selectedDate4}
                    onChange={(date) => setSelectedDate4(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select Date of Departure"
                    className="rounded bg-sky-800 text-white"
                  />
                  <p className="text-sm text-yellow-500">Departure</p>
                </div>
              </div>
            )}
            <div className=" flex items-center w-[10%] justify-center m-auto font-bold text-l bg-sky-800 rounded p-2 mb-2 cursor-pointer">
              <div onClick={handleIncrement} className="flex  items-center">
                <AiOutlinePlus />
                Add Route
              </div>
            </div>
            <div className=" flex items-center w-[10%] justify-center m-auto font-bold text-l bg-sky-800 rounded p-2 mb-2 cursor-pointer">
              <div onClick={handleDecrement} className="flex  items-center">
                <AiFillDelete />
                Remove
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className={`w-[300px] rounded border border-gray-300 px-3 flex items-center justify-center gap-2 bg-sky-900`}
              >
                <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
                  <MdAirlineSeatReclineNormal />
                </div>
                <select
                  onChange={(e) => setClasses(e.target.value)}
                  className="rounded bg-sky-800 text-white p-2"
                >
                  <option selected disabled value="select">
                    Select Class
                  </option>
                  <option value="ECO">Economy</option>
                  <option value="BUS">Business</option>
                  <option value="FIRST">First Class</option>
                </select>
                <p className="text-sm text-yellow-500">Class</p>
              </div>
            </div>
            <div className="px-5 m-2 flex items-center justify-center">
              <a href="#">
                <div className="bg-blue-400 text-sm rounded">
                  <p
                    className="text-white text-center"
                    onClick={handleMultyCity}
                  >
                    <BasicModalCity data={data} />
                    {/* {roundData.length === 0 && <FilledAlerts />} */}
                  </p>
                </div>
              </a>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
