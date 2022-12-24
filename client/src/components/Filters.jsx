import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCTS_MANY } from "../graphql/query";
import MultiRangeSlider from "multi-range-slider-react";

const Filter = () => {

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const [filter, setFilter] = useState({
    priceRange: { gt: minValue, lt: maxValue },
    rating: 3,
    positions: [],
  });

  // Query the products from the fake GraphQL API
  const { loading, error, data } = useQuery(PRODUCTS_MANY, {
    variables: { filter },
  });



  // Event handler for when the price range filter is changed
  const handlePriceRangeChange = (event) => {
    setFilter({
      ...filter,
      priceRange: { gt: minValue, lt: maxValue },
    });
  }

  // Event handler for when the rating filter is changed
  const handleRatingChange = (event) => {
    setFilter({
      ...filter,
      rating: event.target.value,
    });
  }

  // Event handler for when the number of stars filter is changed
  const handleNumStarsChange = (event) => {
    setFilter({
      ...filter,
      numStars: event.target.value,
    });
  }

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
  }

  return (
    <div className="flex flex-col md:justify-between">
      <label
        for="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Default range
      </label>
      <div>
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
      <div className="flex justify-between">
        <div>{minValue}</div>
        <div>{maxValue}</div>
      </div>
      </div>
      <div className="w-full  px-4 py-2">
        <label htmlFor="rating" className="block font-bold mb-2 text-gray-800">
          Minimum Rating
        </label>
        <input
          type="number"
          id="rating"
          className="block w-full px-4 py-2 rounded-lg shadow-sm appearance-none focus:outline-none"
          value={filter.rating}
          onChange={handleRatingChange}
          min="0"
          max="5"
          step="0.5"
        />
      </div>
      <div className="w-full  px-4 py-2">
        <label
          htmlFor="num-stars"
          className="block font-bold mb-2 text-gray-800"
        >
          Minimum Number of Stars
        </label>
        <input
          type="number"
          id="num-stars"
          className="block w-full px-4 py-2 rounded-lg shadow-sm appearance-none focus:outline-none"
          value={filter.numStars}
          onChange={handleNumStarsChange}
          min="0"
        />
      </div>
      <div className="w-full px-4 py-2">
        <label
          htmlFor="positions"
          className="block font-bold mb-2 text-gray-800"
        >
          Positions
        </label>
        <div className="flex flex-wrap -mx-2">
          <div className="w-1/2 px-2 mb-4">
            <label htmlFor="position-1" className="inline-flex items-center">
              <input
                type="checkbox"
                id="position-1"
                className="form-checkbox"
                value="Position 1"
                checked={filter.positions.includes("Position 1")}
                onChange={handlePositionChange}
              />
              <span className="ml-2">Position 1</span>
            </label>
          </div>
          <div className="w-1/2 px-2 mb-4">
            <label htmlFor="position-2" className="inline-flex items-center">
              <input
                type="checkbox"
                id="position-2"
                className="form-checkbox"
                value="Position 2"
                checked={filter.positions.includes("Position 2")}
                onChange={handlePositionChange}
              />
              <span className="ml-2">Position 2</span>
            </label>
          </div>
          <div className="w-1/2 px-2 mb-4">
            <label htmlFor="position-3" className="inline-flex items-center">
              <input
                type="checkbox"
                id="position-3"
                className="form-checkbox"
                value="Position 3"
                checked={filter.positions.includes("Position 3")}
                onChange={handlePositionChange}
              />
              <span className="ml-2">Position 3</span>
            </label>
            <div className="w-1/2 px-2 mb-4">
              <label htmlFor="position-4" className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="position-4"
                  className="form-checkbox"
                  value="Position 4"
                  checked={filter.positions.includes("Position 4")}
                  onChange={handlePositionChange}
                />
                <span className="ml-2">Position 4</span>
              </label>
            </div>
            <div className="w-1/2 px-2 mb-4">
              <label htmlFor="position-5" className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="position-5"
                  className="form-checkbox"
                  value="Position 5"
                  checked={filter.positions.includes("Position 5")}
                  onChange={handlePositionChange}
                />
                <span className="ml-2">Position 5</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
