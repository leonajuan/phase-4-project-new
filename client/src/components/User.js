function User({ userProfile }) {
  return (
    <li className="cards">
      <h2>{userProfile.name}</h2>
      <img src={userProfile.image} alt={userProfile.name} />
    </li>
  )
}

export default User;