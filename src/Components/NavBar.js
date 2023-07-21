import { AppBar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import FilterData from "./FilterData";

function NavBar() {
  console.log("does this render? navbar");
  return (
    <div>
      <AppBar>
        <ul className="navBarStyle">
          <li className="navBarList">
            <Link to="/">EMPLOYEE </Link>
          </li>
          <li className="navBarList">
            <Link to="/Posts">POSTS </Link>
          </li>
          <FilterData />
        </ul>
      </AppBar>
    </div>
  );
}

export default NavBar;
