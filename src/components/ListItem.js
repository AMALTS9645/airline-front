import React from "react";

const ListItem = () => {
  return (
    <>
      <div className="rounded rounded-2 border border-2 max-w-sm w-full lg:max-w-full lg:flex mx-auto">
        <div className="mb-8">
          <div>
            <p>INDIGO</p>
            <p>FLIGHT CODE</p>
          </div>
          <div className="text-gray-900 font-bold text-xl mb-2">
            <div>
              <p>DEL</p>
              <h2>1:00</h2>
              <p>sat,23 sep</p>
              <p>New Delhi</p>
            </div>
            <div>bjvdfnmdvdvddvdv</div>
            <div>
              <p>DEL</p>
              <h2>1:00</h2>
              <p>sat,23 sep</p>
              <p>New Delhi</p>
            </div>
          </div>
        </div>
        <div className="border-l-2 border-dashed h-40"></div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
