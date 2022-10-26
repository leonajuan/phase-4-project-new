import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SongsList from './components/SongsList'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import UsersList from './components/UsersList'

function App() {
  const [songs, setSongs] = useState([])
  const [users, setUsers] = useState([])

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
        setUsers(usersData)
      })
  }, [])

  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/users">
              <UsersList users={users} />
            </Route>
            <Route path="/">
              <SongsList songs={songs} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;