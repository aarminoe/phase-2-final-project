import React from "react";

function Comment({ comment, uploadUser, artist}) {



    return(
        <div className="single-comment">
            {comment}
        </div>
    )
}

export default Comment