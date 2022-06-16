
import React, { useState } from "react";

function Comment({ comment, uploadUser, artist, onHandleDeleteComment}) {

    const [commentDeleted, setCommentDeleted] = useState(false)

    function deleteComment() {
        onHandleDeleteComment(comment, artist)
        setCommentDeleted(true)
    }
    console.log(artist)
    console.log(uploadUser)
    return(
        <>
            <div>
                {commentDeleted ? <p>"{comment}" Comment Deleted!</p> : null}

            </div>
            <div className="single-comment">
                {comment}
                    {artist.name === uploadUser || uploadUser === 'EaselTeam' ? 
                    <button className="delete-comment" onClick={deleteComment}>X</button> : null}
                    
            </div>
        </>
    )
}

export default Comment