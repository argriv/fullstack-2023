import React, { useState, useMemo } from "react";
import { Checkbox } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Positions = ({ filter, handlePositionChange }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // use useMemo to memoize the values for the checked prop of the Checkbox components
  const isPositionSelected = useMemo(() => {
    return (position) => {
      return filter?.positions?.includes(position);
    };
  }, [filter]);

  return (
    <Accordion open={open === 1}>
      <AccordionHeader onClick={() => handleOpen(1)} className="py-0 border-0">
        <div className="block font-700 text-base mb-2 text-gray-800">
          Positions
        </div>
      </AccordionHeader>
      <AccordionBody>
        <div className="w-full">
          <div className="flex flex-wrap -mx-2 flex-col">
            <div className="px-2">
              <label htmlFor="position-1" className="inline-flex items-center">
                <Checkbox
                  value="Position 1"
                  checked={isPositionSelected("Position 1")}
                  onChange={handlePositionChange}
                />
                <span className="ml-2">Position 1</span>
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="position-2" className="inline-flex items-center">
                <Checkbox
                  value="Position 2"
                  checked={isPositionSelected("Position 2")}
                  onChange={handlePositionChange}
                />
                <span className="ml-2">Position 2</span>
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="position-3" className="inline-flex items-center">
                <Checkbox
                  value="Position 3"
                  checked={isPositionSelected("Position 3")}
                  onChange={handlePositionChange}
                />
                <span className="ml-2">Position 3</span>
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="position-4" className="inline-flex items-center">
                <Checkbox
                  value="Position 4"
                  checked={isPositionSelected("Position 4")}
                  onChange={handlePositionChange}
                />
                <span className="ml-2">Position 4</span>
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="position-5" className="inline-flex items-center">
                <Checkbox
                  value="Position 5"
                  checked={isPositionSelected("Position 5")}
                  onChange={handlePositionChange}
                />
                <span className="ml-2">Position 5</span>
              </label>
            </div>
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default Positions;
