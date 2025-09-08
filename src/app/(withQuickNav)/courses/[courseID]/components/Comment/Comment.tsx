import "./Comment.css";

const Comment = () => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h2>Leave a comment</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <form>
          <input type="text" placeholder="Name*" />
          <input type="email" placeholder="Email*" />
          <textarea name="comment" placeholder="Comment"></textarea>
          <div className="save">
            <input type="checkbox" name="is-saved" id="is-saved" />
            <label htmlFor="is-saved">
              Save my name, email in this brower for the next time I comment
            </label>
          </div>
          <input type="submit" value="Posts comment" />
        </form>
      </div>
    </div>
  );
};

export default Comment;
