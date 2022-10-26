function Songs({ song }) {
  return (
    <li className="cards">
      <h1>{song.title}</h1>
      <img src={song.album_cover} alt={song.album} />
      <h3>{song.artist}</h3>
      <h3>{song.album}</h3>
    </li>
  )
}

export default Songs;