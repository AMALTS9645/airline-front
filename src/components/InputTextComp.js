import React from "react";

export const InputTextComp = ({ image, placeholder, label, extraStyle, update }) => {
  return (
    <div className={`flex w-[300px] rounded border border-gray-300 px-3 py-3 ${extraStyle}`}>
      <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
        {image}
      </div>
      <input
        className="ml-3 outline-none border-none text-sm w-full"
        placeholder={placeholder}
        onChange={e=>update(e.target.value)}
      />
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
};
