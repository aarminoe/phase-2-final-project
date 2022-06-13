import Profile from './Profile'

function ProfileList({ artList, accounts }) {
    const accountNames = []

    accounts.forEach((account) => {
        accountNames.push(account)
    })

    

    

    const uniqueAccounts = accounts.filter((account) => {

    })
    console.log(accountNames)

    

    return (
        <div className='profile-list'>
            {accounts.map((artist) => {
                return <Profile key={artist.id} artist={artist} />
            })}
        </div>
    )
}

export default ProfileList