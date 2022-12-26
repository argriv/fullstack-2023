import React from "react";
import CardItems from "./CardItems";
const CardList = ({ data }) => {
  return (
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-4">
      {data.map((data, index) => (
        <CardItems key={index} data={data} />
      ))}
    </div>
  );
};

export default CardList;
