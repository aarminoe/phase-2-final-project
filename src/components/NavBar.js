import React from "react";
import { NavLink } from 'react-router-dom'


function NavBar() {
    return(
        <div className="navbar">
            <NavLink
                exact
                to='/'
                activeStyle={{color: 'black'}}
                className='navlink'
            >
                Home
            </NavLink>
            <NavLink
                exact
                to='/profile-list'
                activeStyle={{color: 'black'}}
                className='navlink'
            >
                Artists
            </NavLink>
            <NavLink 
                exact
                to='/upload'
                activeStyle={{color: 'black'}}
                className='navlink'
            >
                Upload
            </NavLink>
            <NavLink
                exact
                to='/login'
                activeStyle={{color: 'black'}}
                className='navlink'
            >
                Login
            </NavLink>
            <NavLink
                exact
                to='/create-profile'
                activeStyle={{color: 'black'}}
                className='navlink'
            >
                Create Profile
            </NavLink>
        </div>
    )
}

export default NavBar
