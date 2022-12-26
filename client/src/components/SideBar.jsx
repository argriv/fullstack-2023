import React from "react";
import Filters from "./Filters";
const SideBar = ({ onDataChange }) => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <Filters onDataChange={onDataChange}/>
    </aside>
  );
};

export default SideBar;
