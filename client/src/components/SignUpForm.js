function SignUpForm({ userProfiles }) {

  function addNewUser(e) {
    e.preventDefault()

  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={addNewUser}>
        <input type="text" name="name" placeholder="Full Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
export default SignUpForm;