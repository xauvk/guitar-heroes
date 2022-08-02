import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    
    return (
        <div className="nav">
            <NavLink exact to='/' className="navBar">
                Home
            </NavLink>
            {/* <br></br> */}
            <NavLink exact to='/form' className="navBar">
                Add a guitar
            </NavLink>
            {/* <br></br> */}
            <NavLink exact to='/cart' className="navBar">
                Cart
            </NavLink>
        </div>
    )
}

export default NavBar;