import Swal from 'sweetalert2'

function Profile({ user }) {

  // function handleUserUpdate(userId) {
  //   const { value: text } = Swal.fire({
  //     input: 'textarea',
  //     inputLabel: `Edit Name`,
  //     inputPlaceholder: 'Edit your full name here...',
  //     inputAttributes: {
  //       'aria-label': 'Type your full name here'
  //     },
  //     preConfirm: (text) => {
  //       fetch(`/users/${userId}`, {
  //         method: 'PATCH',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           user_id: user.id,
  //           name: text
  //         }),
  //       })
  //         .then(res => res.json())
  //         .then(updatedName => {
  //           console.log(updatedName)
  //         })
  //     },
  //     showCancelButton: true
  //   })
  //   if (text) {
  //     Swal.fire(text)
  //   }

  function editName(userId) {
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: `Edit Name`,
      inputPlaceholder: 'Type your full name here...',
      inputAttributes: {
        'aria-label': 'Type your full name here'
      },
      preConfirm: (text) => {
        fetch(`/reviews/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: user.id,
            name: text
          }),
        })
          .then(res => res.json())
          .then(updatedName => {
            console.log(updatedName)
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
      <h1>MY PROFILE</h1>
      <h1>{user.name}</h1>
      <img src={user.image} alt={user.name} />
      <br />
      <button onClick={editName}>Update Name</button>
    </div>
  )
}

export default Profile;