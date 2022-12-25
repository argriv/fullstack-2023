import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCTS_MANY } from "../graphql/query";
import MultiRangeSlider from "multi-range-slider-react";
import RatingRange from "./UI/RatingRange";
import Positions from "./UI/Positions";

const Filter = () => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(10000000);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const [filter, setFilter] = useState({});

  // Query the products from the fake GraphQL API
  const { loading, error, data } = useQuery(PRODUCTS_MANY, {
    variables: { filter },
  });

  // Event handler for when the price range filter is changed
  const handlePriceRangeChange = () => {
    setFilter({
      ...filter,
      priceRange: { gt: minValue, lt: maxValue },
    });
  };

  // Event handler for when the rating filter is changed
  const handleRatingChange = (event) => {
    setFilter({
      ...filter,
      rating: event.target.value,
    });
  };

  // Event handler for when a position filter is selected
  const handlePositionChange = (event) => {
    const position = event.target.value;
    if (filter.positions.includes(position)) {
      // Remove the position from the filter if it is already selected
      setFilter({
        ...filter,
        positions: filter.positions.filter((p) => p !== position),
      });
    } else {
      // Add the position to the filter if it is not already selected
      setFilter({
        ...filter,
        positions: [...filter.positions, position],
      });
    }
  };

  return (
    <div className="flex flex-col md:justify-between">
      <RatingRange max={5} min={0} />
      <div className="mb-3">
        <div className="block font-bold text-base text-gray-800">Price</div>
        <div className="flex justify-between items-center">
            <input
              type="number"
              className='w-full px-4 py-2 bg-white border rounded-md focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring-2 focus:ring-opacity-40'
              value={minValue}
              onChange={(e) => set_minValue(Number(e.target.value))}
            />
            <span className="w-12 h-1 bg-gray-300 mx-1 rounded-md"></span>
            <input
              type="number"
              className='w-full px-4 py-2 bg-white border rounded-md focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring-2 focus:ring-opacity-40'
              value={maxValue}
              onChange={(e) => set_maxValue(Number(e.target.value))}
            />
        </div>
        <MultiRangeSlider
          min={0}
          max={10000000}
          step={5}
          className="border-none shadow-none"
          ruler="false"
          label="false"
          barLeftColor="#BBBBBB"
          barInnerColor="#BBBBBB"
          barRightColor="#BBBBBB"
          thumbLeftColor="#1e90ff"
          thumbRightColor="#1e90ff"
          minValue={minValue}
          maxValue={maxValue}
          onChange={handlePriceRangeChange}
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
      <Positions />
    </div>
  );
};

export default Filter;
