import { useState } from 'react'
import CommentsList from '../components/CommentsList'

function Songs({ song, comments }) {

  const [showComments, setShowComments] = useState(false)

  return (
    <li className="cards">
      <h1 className="song-title">{song.title}</h1>
      <img src={song.album_cover} alt={song.album} onClick={() => setShowComments(!showComments)} />
      <h3 className="song-details">{song.artist}</h3>
      <h3 className="song-details">{song.album}</h3>
      <button className="comment-button">Add A Comment</button>
      {showComments ? <CommentsList comments={comments} id={song.id} /> : null}
    </li>
  )
}

export default Songs;