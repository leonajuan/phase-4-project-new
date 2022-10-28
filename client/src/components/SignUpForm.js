function SignUpForm({ userProfiles, addNewUser }) {

  function handleNewUser(e) {
    e.preventDefault()
    const name = e.target["name"].value
    const email = e.target["email"].value
    const password = e.target["password"].value
    const image = e.target["image"].value
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: userProfiles.length + 1,
        name: name,
        email: email,
        password: password,
        image: image
      }),
    })
      .then(res => res.json())
      .then(newUser => addNewUser(newUser))
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleNewUser}>
        <input type="text" name="name" placeholder="Full Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <input type="text" name="image" placeholder="Image URL" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
export default SignUpForm;