import React from "react";
import { getData } from "../apis/FetchRoute";

export const ButtonYellowComp = ({ label, extraStyle}) => {
  return (
    <div className={`${extraStyle}`}>
      <a href="#">
        <div className="py-2 px-5 bg-blue-500 text-sm rounded">
          <p className="text-white text-center">
            {label}
          </p>
        </div>
      </a>
    </div>
  );
};
