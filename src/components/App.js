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
    const [uploadEnable, setUploadEnable] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3001/art')
        .then(resp => resp.json())
        .then(data => setArtList(data))
    },[])

    function unlockUpload(user) {
        setUploadUser(user)
        setUploadEnable(true)
    }

    function handleNewUpload(newUploadData) {
        const updatedArtList = [...artList, newUploadData]
        setArtList(updatedArtList)
    }

    function handleNewUser(newUser) {
        const updatedArtList = [...artList, newUser]
        setArtList(updatedArtList)
    }

    return (
        <div>
            <Header />
            <NavBar />
            <Switch>
                <Route path='/profile-list'>
                    <ProfileList artList={artList}/>
                </Route>  
                <Route path='/upload'>
                    <Upload 
                    uploadEnable={uploadEnable} 
                    uploadUser={uploadUser}
                    onHandleNewUpload={handleNewUpload} />    
                </Route>
                <Route path ='/login'>
                    <Login 
                    artList={artList} 
                    onUnlockUpload={unlockUpload}
                    />    
                </Route>
                <Route path='/create-profile'>
                    <CreateProfile 
                    onHandleNewUser={handleNewUser}/>
                </Route>    
                <Route exact path='/'>
                    <Home artList={artList}/>
                </Route>
            </Switch>
        </div>
)
}

export default App