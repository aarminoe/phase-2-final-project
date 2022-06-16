import React, { useState } from "react"
import Comment from "./Comment"

function Post({ artist, logInEnable, uploadUser, onHandleDelete, onHandleComment }) {

    const [likes, setLikes] = useState(artist.likes)
    const [comment, setComment] = useState(null)
    const [commentList, setCommentList] = useState([])
    const [seeComments, setSeeComments] = useState(false)
    const [artistPicked, setArtistPicked] = useState(null)

    function handleLike() {
        fetch(`http://localhost:3001/art/${artist.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                likes: likes
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        setLikes((likes) => likes + 1)
    }

    function handleComment(e) {
        setComment(e.target.value)
    }

    function handleCommentAdd(e) {
        e.preventDefault()
        console.log(artist)
        console.log(comment)
        console.log(uploadUser)
        console.log(commentList)
        fetch(`http://localhost:3001/art/${artist.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: [...artist.comment, comment],
                from: [...artist.from, uploadUser]
            })
        })
        .then(resp => resp.json())
        .then(data => {
            onHandleComment(data)
            console.log(data)
            //setCommentList([...commentList, data])
        })
        setComment('')    
    }

    function onHandleDeleteClick() {
        onHandleDelete(artist)
    }

    function handleSeeComments() {
        setSeeComments((seeComments) => !seeComments)
        setArtistPicked(artist)
        console.log(artistPicked)
    }

    if (artist.profilePic) {
        return null
    }
    return (
        <div className="card">
            <div className="post">
                <div className="image">
                    <img src={artist.image} alt="Image File Not Supported" width='400px'/>
                </div>
                <div className="post-text">
                    <h2 className="card-title">{artist.title}</h2>
                    <p className="artist-post-name">Uploaded By: {artist.name}</p>
                    <p className="description">{artist.bio ? artist.bio : null}</p>
                    <p className="date">Uploaded on: {artist.date}</p>
                    {logInEnable ?
                        <>
                            <button 
                            onClick={handleLike} 
                            className="like-button">🤍
                            </button>
                            <div className="like-number" value={likes}>
                                {likes} Likes      
                            </div> 
                            <div>
                                {seeComments ?
                                <button onClick={handleSeeComments} className='comment-btn'>Hide Comments</button>
                                :<button onClick={handleSeeComments} className='comment-btn'>View Comments</button>
                            }
                            
                            {seeComments ? 
                                <>
                                    <form onSubmit={handleCommentAdd}>
                                        <input className="comment" type='text' placeholder="Leave a Comment..." onChange={handleComment} value={comment}></input>
                                        <button className="plus-button">+</button>
                                    </form>



                                    <div className="comments">
                                    {artist.comment ? artist.comment.map((comment) => {
                                     return <Comment comment={comment} uploadUser={uploadUser} artist={artist}/>
                                    }): null}
                                    </div> 
                                </> :
                                null   
                            }
                
                            </div></>
                            : 'Please Log in to Like/Comment!'     
                    }    
                    {uploadUser === artist.name || uploadUser === 'EaselTeam' ? <button className="delete" onClick={onHandleDeleteClick}>Delete Post</button>
                     : null}
                        

                </div>
                </div>
         </div>
    )

}

export default Post