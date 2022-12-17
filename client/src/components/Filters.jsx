import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/query";
//add query GET_PRODUCT
const Filters = () => {
  // State for storing the selected filters
  const [filters, setFilters] = useState({
    priceRange: [],
    rating: 0,
    positions: [],
  });
  
  // Query the products from the fake GraphQL API
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { filters },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  // Event handler for when the price range filter is changed
  function handlePriceRangeChange(event) {
    setFilters({
      ...filters,
      priceRange: event.target.value,
    });
  }

  // Event handler for when the rating filter is changed
  function handleRatingChange(event) {
    setFilters({
      ...filters,
      rating: event.target.value,
    });
  }

  // Event handler for when the number of stars filter is changed
  function handleNumStarsChange(event) {
    setFilters({
      ...filters,
      numStars: event.target.value,
    });
  }

  // Event handler for when a position filter is selected
  function handlePositionChange(event) {
    const position = event.target.value;
    if (filters.positions.includes(position)) {
      // Remove the position from the filters if it is already selected
      setFilters({
        ...filters,
        positions: filters.positions.filter((p) => p !== position),
      });
    } else {
      // Add the position to the filters if it is not already selected
      setFilters({
        ...filters,
        positions: [...filters.positions, position],
      });
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="w-full md:w-1/3 px-4 py-2">
        <label
          htmlFor="price-range"
          className="block font-bold mb-2 text-gray-800"
        >
          Price Range
        </label>
        <select
          id="price-range"
          className="block w-full px-4 py-2 rounded-lg shadow-sm appearance-none focus:outline-none"
          value={filters.priceRange}
          onChange={handlePriceRangeChange}
        >
          <option value="">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-500">$100 - $500</option>
          <option value="500+">$500+</option>
        </select>
      </div>
      <div className="w-full md:w-1/3 px-4 py-2">
        <label htmlFor="rating" className="block font-bold mb-2 text-gray-800">
          Minimum Rating
        </label>
        <input
          type="number"
          id="rating"
          className="block w-full px-4 py-2 rounded-lg shadow-sm appearance-none focus:outline-none"
          value={filters.rating}
          onChange={handleRatingChange}
          min="0"
          max="5"
          step="0.5"
        />
      </div>
      <div className="w-full md:w-1/3 px-4 py-2">
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
          value={filters.numStars}
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
                checked={filters.positions.includes("Position 1")}
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
                checked={filters.positions.includes("Position 2")}
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
                checked={filters.positions.includes("Position 3")}
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
                  checked={filters.positions.includes("Position 4")}
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
                  checked={filters.positions.includes("Position 5")}
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

export default Filters;
