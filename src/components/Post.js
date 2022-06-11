import React from "react";
import { Card } from "react-bootstrap";

function Post() {
    return (
    <Card>Card
            <img src="null" alt="art!" />
            <h2>Title of Art</h2>
            <p>By: Artist</p>
            <button className="like-button">Like</button>
            <div>
                <input className="comment" type='text'></input>
            </div>
    </Card>
    )
}

export default Post