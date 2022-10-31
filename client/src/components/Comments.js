function Comments({ comment }) {

  return (
    <>
      <p className="comment">{comment.user.name} says: {comment.comment}</p>
    </>
  )
}

export default Comments;