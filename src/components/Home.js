import React from "react";
import PostList from './PostList'

function Home({ artList, logInEnable, uploadUser, onHandleDelete,onHandleComment }) {
    return (
        <div className="home">
           
            <PostList 
            artList={artList} 
            logInEnable={logInEnable}
            uploadUser={uploadUser}
            onHandleDelete={onHandleDelete}
            onHandleComment={onHandleComment}/>
        </div>
    )
}

export default Home