import { useState } from 'react'
import CommentsList from '../components/CommentsList'

function Songs({ song, comments }) {

  const [showComments, setShowComments] = useState(false)

  return (
    <li className="cards">
      <h1>{song.title}</h1>
      <img src={song.album_cover} alt={song.album} onClick={() => setShowComments(!showComments)} />
      <h3>{song.artist}</h3>
      <h3>{song.album}</h3>
      <button>Add A Comment</button>
      {showComments ? <CommentsList comments={comments} id={song.id} /> : null}
    </li>
  )
}

export default Songs;