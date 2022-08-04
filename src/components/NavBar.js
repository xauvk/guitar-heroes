import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    
    return (
        <div className="nav">
            <NavLink exact to='/' className="navBar">
            <i class="fa fa-home icon"></i> Home 
            </NavLink>
            <NavLink exact to='/form' className="navBar">
            <i class="fa fa-dollar icon"></i> Sell a guitar
            </NavLink>
            <NavLink exact to='/cart' className="nav-cart">
            <i class="fa fa-shopping-cart icon"></i> Cart
            </NavLink>
        </div>
    )
}

export default NavBar;