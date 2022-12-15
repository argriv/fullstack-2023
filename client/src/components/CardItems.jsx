import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import HoverRating from "./Rating";
import { Button } from "@material-tailwind/react";

const CardItems = () => {
  return (
    <div className="flex justify-center h-full">
      <Card className="w-96 mb-8 lg:mb-0">
        <CardHeader color="blue" className="relative h-56">
          <img
            src="/img/blog.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Cozy 5 Stars Apartment
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life
            in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center py-3 flex-col">
          <div className="flex justify-between w-full mb-2">
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </div>
          <div className="flex justify-between w-full">
            <HoverRating />
            <Button>Купить</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default CardItems;
