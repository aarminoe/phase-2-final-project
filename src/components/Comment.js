import { upload } from "@testing-library/user-event/dist/upload";
import React from "react";

function Comment({ comment, uploadUser, artist, onHandleDeleteComment}) {

    function deleteComment() {
        onHandleDeleteComment(comment, artist)
    }
    console.log(artist)
    console.log(uploadUser)
    return(
        <>
            <div className="single-comment">
                {comment}
                    {artist.name === uploadUser || uploadUser === 'EaselTeam' ? 
                    <button className="delete-comment" onClick={deleteComment}>X</button> : null}
                    
            </div>
        </>
    )
}

export default Comment