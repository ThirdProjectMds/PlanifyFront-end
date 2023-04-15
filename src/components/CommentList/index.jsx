import "./index.css";
export const CommentList = ({ comments }) => {
 
  return (
    <div className="comment-list">
      {!comments
        ? ""
        : comments.map((comment) => {
            return (
              <div key={comment._id}>
              <span>{comment.author.firstName}</span>
                <li>
                  <p>{comment.content}</p>
                </li>
              </div>
            )
          })
        }
    </div>
  );
};

