import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SongsList from './components/SongsList'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import UsersList from './components/UsersList'
import SignUpForm from './components/SignUpForm'
import Profile from './components/Profile'

function App() {
  const [songs, setSongs] = useState([])
  const [userProfiles, setUserProfiles] = useState([])
  const [user, setUser] = useState({})
  const [filteredUsers, setFilteredUsers] = useState([])
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
        setFilteredUsers(usersData)
      })
  }, [])

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      fetch('/profile', {
        headers: {
          'token': token,
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(data => {
          // console.log("already logged in", data)
          setUser(data)
          // HERE
        })
    }
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
      .then(data => {
        setUser(data.user)
        localStorage.setItem("token", data.token)
        // HERE
      })
  }

  function addNewUser(newUser) {
    const updatedUsersArray = [...userProfiles, newUser]
    setFilteredUsers(updatedUsersArray)
  }

  function handleLogOut() {
    let token = localStorage.getItem("token")
    if (token) {
      fetch("/profile", {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(res => res.json())
        .then(loggedOutUser => console.log(loggedOutUser))
    }
  }

  return (
    <>
      <Header />
      <SignUpForm addNewUser={addNewUser} userProfiles={filteredUsers} />
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/songs">
              <SongsList songs={songs} />
            </Route>
            <Route path="/users">
              <Profile user={user} setUser={setUser} handleLogOut={handleLogOut} songs={songs} />
              {/* <UsersList userProfiles={filteredUsers} /> */}
            </Route>
            <Route path="/">
              <LoginForm handleSubmit={handleSubmit} />
            </Route>
            {/* <Route path="/profile">
              <Profile user={user} />
            </Route> */}
            {/* <Route path="/signup">
              <SignUpForm userProfiles={userProfiles} />
            </Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;