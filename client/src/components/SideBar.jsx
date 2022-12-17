import React from "react";
import { Link } from "react-router-dom";
import Filters from "./Filters";
const SideBar = () => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <Filters />
    </aside>
  );
};

export default SideBar;
