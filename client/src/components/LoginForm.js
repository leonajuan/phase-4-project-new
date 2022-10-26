import { useEffect, useState } from 'react'

function Login() {

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('/login')
      .then(res => res.json())
      .then(userLogin => {
        console.log(userLogin)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    console.log("you're trying to login!")
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