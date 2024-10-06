import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="uldiv">
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "" , textDecorationLine:"none"};
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "" , textDecorationLine:"none" };
            }}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "" , textDecorationLine:"none" };
            }}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "", textDecorationLine:"none" };
            }}
          >
            Post
          </NavLink>
        </li>
     
      </ul>
      <Outlet/>
    </div>
  );
}
export default Layout;
