function User({ user }) {
  return (
    <li className="cards">
      <h2>{user.name}</h2>
      <img src={user.image} alt={user.name} />
    </li>
  )
}

export default User;