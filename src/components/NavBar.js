import React from "react";
import { NavLink } from 'react-router-dom'


function NavBar() {
    return(
        <div>
            <NavLink
                exact
                to='/'
                activeStyle={{color: 'red'}}
            >
                Home
            </NavLink>
            <NavLink
                exact
                to='/profile-list'
            >
                Artists
            </NavLink>
        </div>
    )
}

export default NavBar
