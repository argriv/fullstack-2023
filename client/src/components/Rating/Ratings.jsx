import React, { useState, useEffect, useCallback } from "react";

const Ratings = ({ ratingChange, resetRating }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(null);
  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    ratingChange(rating);
  };

  const handleRatingHover = (rating) => {
    setHoveredRating(rating);
  };

  const starWidth = 32;
  const starHeight = 32;

  const resetRatings = useCallback(() => {
    if (resetRating === true) {
      setSelectedRating(0);
    }
  }, [resetRating]);
  useEffect(() => {
    resetRatings();
  }, [resetRatings]);

  return (
    <div className="flex flex-col items-start mb-2">
      <div className="block font-bold text-base mb-2 text-gray-800">Rating</div>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((rating, index) => (
          <div
            key={rating}
            className={`w-6 h-6 rounded-full flex justify-center items-center cursor-pointer`}
            onClick={() => handleRatingClick(rating)}
            onMouseEnter={() => handleRatingHover(rating)}
            onMouseLeave={() => setHoveredRating(null)}
          >
            <svg
              key={index}
              className={`h-${starHeight} w-${starWidth} ${
                selectedRating >= rating
                  ? "text-yellow-500"
                  : hoveredRating >= rating
                  ? "text-gray-500"
                  : "text-gray-300"
              } fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
