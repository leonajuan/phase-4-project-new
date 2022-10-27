// import { useState } from 'react'

function Login({ handleSubmit }) {

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