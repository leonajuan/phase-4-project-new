function Comments({ comment }) {

  return (
    <>
      <p>{comment.comment} <button>Update Comment</button> <button>X</button> </p>
    </>
  )
}

export default Comments;