import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import ProfileList from './ProfileList'
import Login from './Login'
import CreateProfile from './CreateProfile'

import Home from './Home'
import Upload from './Upload'




function App() {

    const [artList, setArtList] = useState([])
    const [uploadUser, setUploadUser] = useState('')
    const [logInEnable, setLogInEnable] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3001/art')
        .then(resp => resp.json())
        .then(data => setArtList(data))
    },[])

    function loggedIn(user) {
        setUploadUser(user)
        setLogInEnable(true)
    }

    function handleNewUpload(newUploadData) {
        const updatedArtList = [...artList, newUploadData]
        setArtList(updatedArtList)
    }

    function handleNewUser(newUser) {
        console.log(newUser)
        const updatedArtList = [...artList, newUser]
        setArtList(updatedArtList)
    }

    return (
        <div>
            <Header logInEnable={logInEnable} uploadUser={uploadUser}/>
            <NavBar logInEnable={logInEnable}/>
            <Switch>
                <Route path='/profile-list'>
                    <ProfileList artList={artList}/>
                </Route>  
                <Route path='/upload'>
                    <Upload 
                    logInEnable={logInEnable} 
                    uploadUser={uploadUser}
                    onHandleNewUpload={handleNewUpload} />    
                </Route>
                <Route path ='/login'>
                    <Login 
                    artList={artList} 
                    onLoggedIn={loggedIn}
                    />    
                </Route>
                <Route path='/create-profile'>
                    <CreateProfile
                    artList={artList} 
                    onHandleNewUser={handleNewUser}/>
                </Route>    
                <Route exact path='/'>
                    <Home artList={artList} logInEnable={logInEnable}/>
                </Route>
            </Switch>
        </div>
)
}

export default App