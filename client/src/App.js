import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SongsList from './components/SongsList'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import UsersList from './components/UsersList'
import SignUpForm from './components/SignUpForm'

function App() {
  const [songs, setSongs] = useState([])
  const [userProfiles, setUserProfiles] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('/songs')
      .then(res => res.json())
      .then(songsData => {
        setSongs(songsData)
      })
  }, [])

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(usersData => {
        setUserProfiles(usersData)
      })
  }, [])

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
    <>
      <Header />
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/songs">
              <SongsList songs={songs} />
            </Route>
            <Route path="/users">
              <UsersList userProfiles={userProfiles} />
            </Route>
            <Route path="/">
              <LoginForm handleSubmit={handleSubmit} />
            </Route>
            <Route path="/signup">
              <SignUpForm />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;