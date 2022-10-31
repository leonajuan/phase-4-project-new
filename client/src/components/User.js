function User({ userProfile }) {
  return (
    <li className="user-cards">
      <h2 className="user-name">{userProfile.name}</h2>
      <img className="user-photos" src={userProfile.image} alt={userProfile.name} />
    </li>
  )
}

export default User;