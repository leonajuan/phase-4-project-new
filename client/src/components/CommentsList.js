import Comments from "../components/Comments";

function CommentsList({ comments, id }) {

  const commentsComponents = comments.filter(comment => comment.song_id === id).map(filteredComment => {
    return <Comments key={filteredComment.id} comment={filteredComment} />
  })

  return (
    <div>
      {commentsComponents}
    </div>
  )
}

export default CommentsList;