import React from "react";
import { NavLink } from 'react-router-dom'


function NavBar() {
    return(
        <div className="navbar">
            <NavLink
                exact
                to='/'
                activeStyle={{color: 'red'}}
                className='navlink'
            >
                Home
            </NavLink>
            <NavLink
                exact
                to='/profile-list'
                activeStyle={{color: 'red'}}
                className='navlink'
            >
                Artists
            </NavLink>
            <NavLink 
                exact
                to='/upload'
                activeStyle={{color: 'red'}}
                className='navlink'
            >
                Upload
            </NavLink>
            <NavLink
                exact
                to='/login'
                activeStyle={{color: 'red'}}
                className='navlink'
            >
                Login
            </NavLink>
            <NavLink
                exact
                to='/create-profile'
                activeStyle={{color: 'red'}}
                className='navlink'
            >
                Create Profile
            </NavLink>
        </div>
    )
}

export default NavBar
