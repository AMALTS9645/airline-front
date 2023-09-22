import axios from "axios"

export async function getData(data) {
  let response = await fetch("http://localhost:8000/recommendations", {
    method: "POST",

    body: JSON.stringify(data),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (response.ok) {
    let data = await response.json();

    // console.log(data);

    return Promise.resolve(data);
  } else {
    console.log(response);

    return Promise.reject({
      message: `Error ${response.status}`,
    });
  }
}



export async function gerRecommendation(data) {
  let response = await axios.post("http://localhost:8000/airport/autocomplete", data);

  if (response.ok) {
    let data = await response.json();

    console.log(data);

    return Promise.resolve(data);
  } else {
    console.log(response);

    return Promise.reject({
      message: `Error ${response.status}`,
    });
  }
}