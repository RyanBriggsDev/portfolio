function Post(props) {
  return (
    <div className="blog-post">
        <h4 className="blog-title">{props.title}</h4>
        <p className="blog-date">{props.datePosted}</p>
        <p className="blog-content">{props.content}</p>
    </div>
  )
}

export default Post