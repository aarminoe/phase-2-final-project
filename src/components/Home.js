import React from "react";
import PostList from './PostList'

function Home({ artList, logInEnable }) {
    return (
        <div>
            <PostList artList={artList} logInEnable={logInEnable}/>
        </div>
    )
}

export default Home