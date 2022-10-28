import Swal from 'sweetalert2'
// import Comments from './Comments'

function Profile({ user, setUser, handleLogOut, deleteUser }) {

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
    <div>
      <h1>Hello, {user.name}!</h1>
      <img src={user.image} alt={user.name} />
      <br />
      <button onClick={editName}>Update Name</button>
      <br />
      <br />
      <button onClick={handleLogOut}>Log Out</button>
      <br />
      <button onClick={deleteUser}>Delete Account</button>
      {/* <h2>My Favorite Songs</h2> */}
    </div>
  )
}

export default Profile;