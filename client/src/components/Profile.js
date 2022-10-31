import Swal from 'sweetalert2'
import { useState } from 'react'
import UsersList from '../components/UsersList'

function Profile({ user, setUser, handleLogOut, deleteUser, userProfiles }) {

  function editName() {
    let token = localStorage.getItem('token')
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: `Edit Name`,
      inputPlaceholder: 'Type your full name here...',
      inputAttributes: {
        'aria-label': 'Type your full name here'
      },
      preConfirm: (text) => {
        fetch(`/user-name`, {
          method: 'PATCH',
          headers: {
            'token': token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: user.id,
            name: text
          }),
        })
          .then(res => res.json())
          .then(updatedUser => {
            setUser(updatedUser)
          })
      },
      showCancelButton: true
    })
    if (text) {
      Swal.fire(text)
    }
  }

  return (
    <>
      <div>
        <h1 className="profile-name">Hello, {user.name}!</h1>
        <img className="profile-pic" src={user.image} alt={user.name} />
        <br />
        <button className="profile-buttons" id="update-button" onClick={editName}>Update Name</button>
        <br />
        <br />
        <button className="profile-buttons" onClick={handleLogOut}>Log Out</button>
        <br />
        <button className="profile-buttons" onClick={deleteUser}>Delete Account</button>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <h2 className="all-users">All Users:</h2>
        <UsersList userProfiles={userProfiles} />
      </div>
    </>
  )
}

export default Profile;