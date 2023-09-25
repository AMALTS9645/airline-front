import axios from "axios";

export async function getData(data) {
  let response = await axios.post(
    "http://localhost:8000/recommendations",
    data
  );

  if (response.status === 200) {
    // console.log(data);

    return Promise.resolve(response);
  } else {
    console.log(response);

    return Promise.reject({
      message: `Error ${response.status}`,
    });
  }
}
export async function getRoundData(data) {
  let response = await axios.post(
    "http://localhost:8000/multi_city_flight_recommendation",
    data
  );

  if (response.status === 200) {
    // console.log(data);

    return Promise.resolve(response);
  } else {
    console.log(response);

    return Promise.reject({
      message: `Error ${response.status}`,
    });
  }
}

export async function getRecommendation(data) {
  let response = await axios.post(
    "http://localhost:8000/airport/autocomplete",
    data
  );

  if (response.status === 200) {
    // console.log(data);

    return Promise.resolve(response);
  } else {
    console.log(response);

    return Promise.reject({
      message: `Error ${response.status}`,
    });
  }
}

export async function getMultiCity(data) {
  let response = await axios.post(
    "http://localhost:8000/multi_city_flight_recommendation",
    data
  );

  if (response.status === 200) {
    // console.log(data);

    return Promise.resolve(response);
  } else {
    console.log(response);

    return Promise.reject({
      message: `Error ${response.status}`,
    });
  }
}
