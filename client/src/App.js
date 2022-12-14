import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SongsList from './components/SongsList'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
// import UsersList from './components/UsersList'
// import SignUpForm from './components/SignUpForm'
import Profile from './components/Profile'


function App() {
  const [songs, setSongs] = useState([])
  const [userProfiles, setUserProfiles] = useState([])
  const [user, setUser] = useState({})
  const [filteredUsers, setFilteredUsers] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])

  useEffect(() => {
    fetch('/songs')
      .then(res => res.json())
      .then(songsData => {
        setSongs(songsData)
        setFilteredSongs(songsData)
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
        alert("You're logged in!")
      })
  }

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

  function addNewUser(newUser) {
    const updatedUsersArray = [...userProfiles, newUser]
    setFilteredUsers(updatedUsersArray)
    alert("Thank you for signing up!")
  }

  function handleNewSong(e) {
    e.preventDefault()
    const title = e.target["title"].value
    const artist = e.target["artist"].value
    const album = e.target["album"].value
    const album_cover = e.target["album_cover"].value
    fetch('/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: songs.length + 1,
        title: title,
        artist: artist,
        album: album,
        album_cover: album_cover
      }),
    })
      .then(res => res.json())
      .then(newSong => addNewSong(newSong))
  }

  function addNewSong(newSong) {
    const updatedSongsArray = [...songs, newSong]
    setFilteredSongs(updatedSongsArray)
    alert("Song submitted.")
  }

  function handleLogOut() {
    localStorage.removeItem('token')
    window.location.reload()
  }

  function deleteUser() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch('/profile', {
        method: 'DELETE',
        headers: {
          'token': token,
          'Content-Type': 'application/json'
        },
      })
      // .then(res => res.json())
      // .then(deletedUser => {
      //   console.log(deletedUser)
      // })
    }
  }

  return (
    <>
      <Header />
      {/* <SignUpForm addNewUser={addNewUser} userProfiles={filteredUsers} /> */}
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/songs">
              <SongsList songs={filteredSongs} user={user} handleNewSong={handleNewSong} />
            </Route>
            <Route path="/users">
              <Profile user={user} setUser={setUser} handleLogOut={handleLogOut} songs={songs} deleteUser={deleteUser} userProfiles={userProfiles} />
              {/* <UsersList userProfiles={filteredUsers} /> */}
            </Route>
            <Route path="/">
              <LoginForm handleSubmit={handleSubmit} handleNewUser={handleNewUser} addNewUser={addNewUser} userProfiles={userProfiles} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;