function NewSongForm({ handleNewSong }) {
  return (
    <>
      <form onSubmit={handleNewSong}>
        <h1>Add A Song</h1>
        <input type="text" name="title" placeholder="Song Title" />
        <input type="text" name="artist" placeholder="Artist" />
        <input type="text" name="album" placeholder="Album" />
        <input type="text" name="album_cover" placeholder="Album Cover" />
        <button>Submit</button>
      </form>
    </>
  )
}

export default NewSongForm; 