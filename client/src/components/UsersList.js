import User from '../components/User'

function UsersList({ userProfiles }) {

  const usersComponents = userProfiles.map(userProfile => {
    return <User key={userProfile.id} userProfile={userProfile} />
  })

  return (
    <main>
      {usersComponents}
    </main>
  )
}

export default UsersList;