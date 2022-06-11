import React from "react";
import PostList from './PostList'

function Home({ artList }) {
    return (
        <div>
            <PostList artList={artList} />
        </div>
    )
}

export default Home