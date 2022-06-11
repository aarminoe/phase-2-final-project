import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import ProfileList from './ProfileList'

import Home from './Home'




function App() {

    const [artList, setArtList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/art')
        .then(resp => resp.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <Header />
            <NavBar />
            <Switch>
                <Route path='/profile-list'>
                    <ProfileList />
                </Route>    
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
            <button>test</button>
        </div>
)
}

export default App