import React from "react";
import PostList from './PostList'

function Home({ artList, uploadEnable }) {
    return (
        <div>
            <PostList artList={artList} uploadEnable={uploadEnable}/>
        </div>
    )
}

export default Home