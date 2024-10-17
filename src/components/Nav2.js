import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav2.css";

const Nav2 = () => {
  return (
    <div className="navcont ">
      <ul className="nav2">
        <li>
          <NavLink
            to="passion"
            className={({ isActive }) => (isActive ? "active2" : "")}
          >
            Paixão
          </NavLink>
        </li>
        <li>
          <NavLink
            to="past"
            className={({ isActive }) => (isActive ? "active2" : "")}
          >
            Passado
          </NavLink>
        </li>
        <li>
          <NavLink
            to="present"
            className={({ isActive }) => (isActive ? "active2" : "")}
          >
            Presente
          </NavLink>
        </li>
        <li>
          <NavLink
            to="future"
            className={({ isActive }) => (isActive ? "active2" : "")}
          >
            Futuro
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav2;
