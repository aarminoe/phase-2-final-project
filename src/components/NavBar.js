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
                activeStyle={{color: 'red'}}
            >
                Artists
            </NavLink>
            <NavLink 
                exact
                to='/upload'
                activeStyle={{color: 'red'}}
            >
                Upload
            </NavLink>
            <NavLink
                exact
                to='/login'
                activeStyle={{color: 'red'}}
            >
                Login
            </NavLink>
        </div>
    )
}

export default NavBar
