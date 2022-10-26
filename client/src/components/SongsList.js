import Songs from '../components/Songs'

function SongsList({ songs }) {

  const songsComponents = songs.map(song => {
    return <Songs key={song.id} song={song} />
  })

  return (
    <main>
      {songsComponents}
    </main>
  )
}

export default SongsList;