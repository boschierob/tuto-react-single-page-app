import React from "react";
import {Link, NavLink} from "react-router-dom";

const Menu = () =>{
  return(
    <div className="menu">
        <ul>
  <li>
    <NavLink to="/Docs">Docs</NavLink>
  </li>
  <li >
    <NavLink to="/tutorials">Tutorials</NavLink>
  </li>
  <li >
    <NavLink to="/community">Community</NavLink>
  </li>
</ul>
      </div>
  )


}

export default Menu;