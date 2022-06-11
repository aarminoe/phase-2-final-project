import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import ProfileList from './ProfileList'
import Login from './Login'

import Home from './Home'
import Upload from './Upload'




function App() {

    const [artList, setArtList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/art')
        .then(resp => resp.json())
        .then(data => setArtList(data))
    },[])

    return (
        <div>
            <Header />
            <NavBar />
            <Switch>
                <Route path='/profile-list'>
                    <ProfileList artList={artList}/>
                </Route>  
                <Route path='/upload'>
                    <Upload />    
                </Route>
                <Route path ='/login'>
                    <Login artList={artList}/>    
                </Route>  
                <Route exact path='/'>
                    <Home artList={artList}/>
                </Route>
            </Switch>
        </div>
)
}

export default App