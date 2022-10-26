import User from '../components/User'

function UsersList({ users }) {

  const usersComponents = users.map(user => {
    return <User key={user.id} user={user} />
  })

  return (
    <main>
      {usersComponents}
    </main>
  )
}

export default UsersList;