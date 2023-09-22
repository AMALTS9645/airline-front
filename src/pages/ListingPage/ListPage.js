import React from "react";
import { HeaderNavComp } from "../../components/HeaderNavComp";
import ListItem from "../../components/ListItem";
import { useLocation } from "react-router-dom";

const ListPage = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <HeaderNavComp />
      <div className="mx-[60px] my-[30px]">
        <ListItem />
      </div>
    </div>
  );
};

export default ListPage;
