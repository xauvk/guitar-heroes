import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    
    return (
        <div className="nav">
            <NavLink exact to='/' className="navBar">
                Home 
            </NavLink>
            <NavLink exact to='/form' className="navBar">
                Add a guitar
            </NavLink>
            <NavLink exact to='/cart' className="nav-cart">
                Cart
            </NavLink>
        </div>
    )
}

export default NavBar;