import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="nav nav-tabs">
      <NavLink
        className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
        to={"/"}
      >
        Home
      </NavLink>

      <NavLink
        className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
        to={"/about"}
      >
        About
      </NavLink>

      <NavLink
        className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
        to={"/login"}
      >
        Login
      </NavLink>
    </ul>
  )
}