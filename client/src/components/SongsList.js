import { useState, useEffect } from 'react'
import Songs from '../components/Songs'

function SongsList({ songs }) {

  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('/comments')
      .then(res => res.json())
      .then(commentsData => {
        setComments(commentsData)
      })
  }, [])

  const songsComponents = songs.map(song => {
    return <Songs key={song.id} song={song} comments={comments} />
  })

  return (
    <main>
      {songsComponents}
    </main>
  )
}

export default SongsList;