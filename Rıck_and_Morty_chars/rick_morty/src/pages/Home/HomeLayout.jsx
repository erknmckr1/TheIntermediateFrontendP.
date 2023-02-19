import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./home.css";

function HomeLayout() {
  return (
    <>
      <nav>
        <p className="logo" >Rick and Morty</p>
        <div>
          <NavLink className="link_item" to="/">
            Characters
          </NavLink>
          <NavLink className="link_item" to="/episodes">
            Episodes
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
