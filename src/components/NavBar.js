import React from "react";
import {Link, NavLink} from "react-router-dom";

function NavBar () {
    
    
    return (
        <div>
            <NavLink exact to='/'>
                Home
            </NavLink>
            <br></br>
            <NavLink exact to='/form'>
                Add a guitar
            </NavLink>
            <br></br>
            <NavLink exact to='/cart'>
                Cart
            </NavLink>
        </div>
    )
}

export default NavBar;