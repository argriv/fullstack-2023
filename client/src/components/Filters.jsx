import React, { useState, useRef, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCTS_MANY } from "../graphql/product/query";
import MultiRangeSlider from "multi-range-slider-react";
import Ratings from "./Rating/Ratings";
import Positions from "./Positions";
import { Button } from "@material-tailwind/react";

const Filter = ({ onDataChange }) => {
  const filterRef = useRef(null);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(10000000);
  const [filter, setFilter] = useState({
    priceRange: { gt: minValue, lt: maxValue },
    ratings: null,
    positions: [],
  });
  filterRef.current = filter;

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const [resetRating, setResetRating] = useState(false)

  //Query the products from the fake GraphQL API
  const { loading, error, data } = useQuery(PRODUCTS_MANY, {
    variables: { filter },
  });

  useEffect(() => {
    if (!loading && !error) {
      onDataChange(data.Products_Many); // Call callback function when data from useQuery hook changes
    }
  }, [data, loading, error, onDataChange]);

  // Event handler for when the price range filter is changed
  const handlePriceRangeChange = () => {
    setFilter({
      ...filterRef.current, // use the current value of the ref instead of the filter state variable
      priceRange: { gt: minValue, lt: maxValue },
    });
  };

  // Event handler for when the rating filter is changed
  const handleRatingChange = (rating) => {
    setFilter({
      ...filterRef.current, // use the current value of the ref instead of the filter state variable
      ratings: rating,
    });
  };

  // Event handler for when a position filter is selected
  const handlePositionChange = (event) => {
    const position = event.target.value;
    if (filterRef?.current?.positions?.includes(position)) {
      // Remove the position from the filter if it is already selected
      setFilter({
        ...filterRef.current, // use the current value of the ref instead of the filter state variable
        positions: filterRef.current.positions.filter((p) => p !== position),
      });
    } else {
      // Add the position to the filter if it is not already selected
      setFilter({
        ...filterRef.current, // use the current value of the ref instead of the filter state variable
        positions: [...filterRef?.current?.positions, position],
      });
    }
  };

  return (
    <div className="flex flex-col md:justify-between pb-7">
      <Ratings ratingChange={handleRatingChange} resetRating={resetRating} max={5} min={0} />
      <div className="mb-3">
        <div className="block font-bold text-base text-gray-800">Price</div>
        <div className="flex justify-between items-center">
          <input
            type="number"
            className="w-full px-1 py-2 bg-white border rounded-md focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring-2 focus:ring-opacity-40"
            value={minValue}
            onChange={(e) => set_minValue(Number(e.target.value))}
          />
          <span className="w-12 h-1 bg-gray-300 mx-1 rounded-md"></span>
          <input
            type="number"
            className="w-full px-1 py-2 bg-white border rounded-md focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring-2 focus:ring-opacity-40"
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
      <Positions filter={filter} handlePositionChange={handlePositionChange} />
      <Button
        variant="text"
        className="font-700 text-sm"
        onClick={() => {
          set_minValue(0);
          set_maxValue(10000000);
          setResetRating(true)
          setFilter({
            priceRange: { gt: 0, lt: 10000000 },
            ratings: null,
            positions: [],
          });
        }}
      >
        Reset filter
      </Button>
    </div>
  );
};

export default Filter;
