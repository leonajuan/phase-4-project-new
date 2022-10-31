import { useState, useEffect } from 'react'
import Songs from '../components/Songs'
import Swal from 'sweetalert2'
import NewSongForm from '../components/NewSongForm'

function SongsList({ songs, user, id, handleNewSong }) {

  const [comments, setComments] = useState([])
  const [filteredComments, setFilteredComments] = useState([])

  useEffect(() => {
    fetch('/comments')
      .then(res => res.json())
      .then(commentsData => {
        setComments(commentsData)
        setFilteredComments(commentsData)
      })
  }, [])

  function handleNewComment() {
    let token = localStorage.getItem('token')
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: `Add a Comment`,
      inputPlaceholder: 'Add your comment here...',
      inputAttributes: {
        'aria-label': 'Type your comment here'
      },
      preConfirm: (text) => {
        fetch(`/comments`, {
          method: 'POST',
          headers: {
            'token': token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: user.id,
            song_id: id,
            comment: text
          }),
        })
          .then(res => res.json())
          .then(newComment => {
            addNewComment(newComment)
          })
      },
      showCancelButton: true
    })
    if (text) {
      Swal.fire(text)
    }
  }

  function addNewComment(newComment) {
    const updatedCommentsArray = [...comments, newComment]
    setFilteredComments(updatedCommentsArray)
  }

  const songsComponents = songs.map(song => {
    return <Songs key={song.id} song={song} comments={comments} handleNewComment={handleNewComment} />
  })

  return (
    <main>
      <NewSongForm handleNewSong={handleNewSong} />
      {songsComponents}
    </main>
  )
}

export default SongsList;