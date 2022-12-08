import React from "react";
import CardItems from "./CardItems";
const CardList = () => {
  return (
    <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
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
