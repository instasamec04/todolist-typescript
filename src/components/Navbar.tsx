import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper deep-orange accent-2 px1">
        <NavLink to="/" className="brand-logo">
          REACT + TYPESCRIPT
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">СПИСОК ДЕЛ</NavLink>
          </li>
          <li>
            <NavLink to="/about">ИНФОРМАЦИЯ</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
