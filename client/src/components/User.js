function User({ user }) {
  return (
    <li className="cards">
      <h2>{user.name}</h2>
    </li>
  )
}

export default User;