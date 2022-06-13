import Profile from './Profile'

function ProfileList({ accounts }) {
    
    return (
        <div className='profile-list'>
            {accounts.map((artist) => {
                return <Profile key={artist.id} artist={artist} />
            })}
        </div>
    )
}

export default ProfileList