import React from "react";
import NavBar from "./Navbar";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname === "/" ? <NavBar /> : null}
      <div className="container mx-auto px-2">{children}</div>
    </React.Fragment>
  );
};
