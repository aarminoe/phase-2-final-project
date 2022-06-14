import React from "react";
import PostList from './PostList'

function Home({ artList, logInEnable, uploadUser, onHandleDelete }) {
    return (
        <div className="home">
           
            <PostList 
            artList={artList} 
            logInEnable={logInEnable}
            uploadUser={uploadUser}
            onHandleDelete={onHandleDelete}/>
        </div>
    )
}

export default Home