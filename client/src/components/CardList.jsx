import React from "react";
import CardItems from "./CardItems";
const CardList = () => {
  return (
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-14 my-10 pt-32">
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
      <CardItems />
    </div>
  );
};

export default CardList;
