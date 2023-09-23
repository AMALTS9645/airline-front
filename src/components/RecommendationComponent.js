import React from "react";
import VirtualizedList from "./VirtualizedList";

const RecommendationComponent = ({ recommendations, setDepList, handleSetDepFromClick }) => {
  return (
    <div>
        <VirtualizedList items={recommendations} depList={setDepList} handleSetDepFromClick={handleSetDepFromClick}/>
    </div>
  );
};

export default RecommendationComponent;
