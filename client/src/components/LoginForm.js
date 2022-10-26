import { useState } from 'react'

function Login() {

  const [user, setUser] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const email = e.target["email"].value
    const password = e.target["password"].value
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(userLogin =>
        setUser(userLogin))
  }

  return (
    <div>
      <h2>Please Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;