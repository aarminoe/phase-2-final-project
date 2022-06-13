import React from "react";

function Profile({ artist }) {


    console.log(artist)

    if(artist.profilePic) {
        return (
        <div className="profile-card">
            <h1>{artist.name}</h1>
            <div className="artist-avatar">
                {artist.profilePic !== '' ? <img alt="File not Supported" src={artist.profilePic} /> : <img alt="default avatar" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAggMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABgcIAQIDBQT/xAA9EAACAQMCAwYEAgQPAAAAAAAAAQIDBAUGEQchMRJBUWGBkRMicaFCsTKSotEUFSMkJTM2Q1JicnSCwcP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALDABWQAAAAAAAAAAAAAAAAAAAAAAAAAAADnRbv7gdBWGsuKlOyqzstOQp16sG4zvJ84J/5V+L6vl9StshrDUWQn2rrM3j8oVPhr2jsguNMbAy/b6jzdtUU6GXv4ST5fziW3tuTHTfFfLWNSFPNxWQtujkoqNWK8mtk/X3Bi7wfjxOTs8xYUr7HV41reqt1Jdz7013NeB+wIAAAAAAAAAAAAABW/GLVE8bY08LZVOxcXcXKvKPWNLpt/yf2T8SyEtzNevcnLK6tyly5bwVd0qfPf5IfKvy39QsR9s4ARQAATThfqipgc7Ttq9R/xfeyVOrFvlCT/AEZrw58n5PyNAtbNoyWnt0NN6NyLyulcXezl2qlS3iqkvGcfll90ypX2QAEAAAAAAAAAAB4VZ/DpTm/wxb9kZQqzlUqSqTe8ptyb82atu4udpXgusqUkvZmTyLAABQAAC/eDdd1dFU6b/ubipFer7X/ZQRe/BaEo6QqSa5Tu5te0QJ8ACsgAAAAAAAAAALzMzazw9TB6lv7KUdoRqudJ+NOXOL9uXoaZIvrjRlnqy1h25/AvqKao3CW62f4ZLvX5e4WM5AkuZ0LqLETauMZVqwXSrbL4sX58ua9UiP1LetSe1WjUg/CUGiK9QPKMJTe0YtvwS3Pp47TeayVRQssXd1d/xKk1H9Z8gPlxi5PZLd+BpbQ2JnhdJ46yrRca6p/ErRfWM5PtNem+3oQ/QXDJ425pZLUHw53FNqVK1i1KMJdzk+ja8Fy+pZxUoAAgAAAAAAAAAAABG9Ua2w2mv5O7rSrXe26tqG0p+vPaPqBJE2jjipfpRUvqijszxazl25QxtK3sKb6NR+JU93y+xFrnVuorqfbrZvIPfujcSivZNILjTKpxj0hFfSKPIy/DUmdpvenmslF+V3P9597F8TdT2E18S7heU++FzBS/aWz+4MaCBX+meKmIykoUMrTeOuJclOT7VJv/AFd3qtvMn8ZRnFShJSjJbpp7poDoACAAAAAAAAAXN7IEB4rateExqxljV7N/eR+aSfOlS6N/V9F6sK+XxF4jys6lXE6eq7VotwuLuP4H3xh5+L7u4p+pOVSpKc5SlKT3cpPdt+Z4s4RQAAAAB3cmmhNe3mmq0ba5c7nFyfzUW93S84eH06MhR0DVtjeW2Qs6V5ZVY1retHtU6kejR7yiuFOrnhcnHGX1X+jruSW8nyo1H0l5J9H6MvUqAACAAAAAD1161O3oVK9eShSpRc5yfRJLdmYtTZirnc5d5Ks/66pvBf4YLlFeiSLz4qZB4/RN92HtO57NuvpJ/N+ymZ5CxwAEUAAAAAAAB2JozhxnZZ/S1vWrS7V1bv8Ag9dvq3FLZ+qa9dzORZ/AvISp5bIY5t9ivQVaK35dqD2/KX2AuYAFZAAAAAFc8cf7N2P+9/8AORSAAaAAQAAAAAAAACb8HG1ri32fWhV3/VYAF/AArIAAP//Z" />}   
            </div>
            <p className="artist-bio">
               Bio: {artist.bio}
            </p>
        </div>
        )
    }
}

export default Profile