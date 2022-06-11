import Profile from './Profile'

function ProfileList({ artList }) {
    return (
        <div className='profile-list'>
            {artList.map((artist) => {
                return <Profile key={artist.id} artist={artist} />
            })}
        </div>
    )
}

export default ProfileList