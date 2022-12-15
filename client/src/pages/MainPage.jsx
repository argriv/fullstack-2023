import React, { useState } from "react";
import CardList from "../components/CardList";
import SideBar from "../components/SideBar";
const MainPage = () => {
  return (
    <div className="flex justify-between gap-5">
      <SideBar />
      <CardList />;
    </div>
  );
};

export default MainPage;
