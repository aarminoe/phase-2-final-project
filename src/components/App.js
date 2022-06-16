import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import ProfileList from './ProfileList'
import Login from './Login'
import CreateProfile from './CreateProfile'
import User from './User'
import Home from './Home'
import Upload from './Upload'




function App() {

    const [artList, setArtList] = useState([])
    const [uploadUser, setUploadUser] = useState('')
    const [logInEnable, setLogInEnable] = useState(false)
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/art')
        .then(resp => resp.json())
        .then(data => {
            setArtList(data)
            setAccounts(data)
        })
    },[])

    function loggedIn(user) {
        setUploadUser(user)
        setLogInEnable(true)
    }

    function handleNewUpload(newUploadData) {
        const updatedArtList = [...artList, newUploadData]
        setArtList(updatedArtList)
        console.log(newUploadData)
    }

    function handleNewUser(newUser) {
        console.log(newUser)
        const updatedArtList = [...artList, newUser]
        setAccounts(updatedArtList)
    }

    function handleDate(date) {
        console.log(date)
    }

    function handleDeletePost(artistPost) {
        console.log(artistPost)
        const updatedArtList = artList.filter((art) => {
            return art !== artistPost
        })
        setArtList(updatedArtList)
        fetch(`http://localhost:3001/art/${artistPost.id}`, {
            method:'DELETE',
        })
        .then(resp => resp.json())
    }

    function handleComment(comment) {
        const updatedArtList = [...artList, comment]
        setArtList(updatedArtList)
    }

    function handleDeleteComment(badComment, artist) {
        console.log(badComment)
        console.log(artist)
        let commentIndex = artist.comment.indexOf(badComment)
        // artList.forEach((art) => {
        //     if (art.comment.includes(badComment)) {
        //         commentIndex = art.comment.indexOf(badComment)
        //     }
        // })
        // const updatedArtList = artList.filter((art) => {
        //     return !art.comment.includes(badComment)
        // })
        console.log(commentIndex)


        fetch(`http://localhost:3001/art/${artist.id}`, {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: [...artist.comment.filter((comment) => {
                    return comment !== badComment
                })]
            })
        })
        .then(resp => resp.json())
    }

    return (
        <div>
            <Header logInEnable={logInEnable} uploadUser={uploadUser}/>
            <NavBar logInEnable={logInEnable} uploadUser={uploadUser}/>
            <Switch>
                <Route path='/profile-list'>
                    <ProfileList artList={artList} accounts={accounts}/>
                </Route>  
                <Route path='/upload'>
                    <Upload 
                    logInEnable={logInEnable} 
                    uploadUser={uploadUser}
                    onHandleNewUpload={handleNewUpload}
                    onHandleDate={handleDate} />    
                </Route>
                <Route path ='/login'>
                    <Login 
                    artList={artList}
                    accounts={accounts} 
                    onLoggedIn={loggedIn}
                    />    
                </Route>
                <Route path='/create-profile'>
                    <CreateProfile
                    artList={artList} 
                    onHandleNewUser={handleNewUser}/>
                </Route> 
                <Route path='/user'>
                    <User 
                    uploadUser={uploadUser}
                    artList={artList} 
                    />
                </Route>
                <Route exact path='/'>
                    <Home 
                    artList={artList} 
                    logInEnable={logInEnable}
                    uploadUser={uploadUser}
                    onHandleDelete={handleDeletePost}
                    onHandleComment={handleComment}
                    onHandleDeleteComment={handleDeleteComment}/>
                </Route>
            </Switch>
        </div>
)
}

export default App