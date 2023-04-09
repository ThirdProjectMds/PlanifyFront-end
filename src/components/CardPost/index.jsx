import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { deletePost } from "../../services/PostService";
import AuthContext from "../../contexts/AuthContext";

export const CardPost = ({ data }) => {
  const { currentUser } = useContext(AuthContext);

  const isMyPost = (post) => {
    return currentUser?.id === post.author.id;
  };
  return (
    <div className="Card">
      <div className="image-place">
        <img src={data.image} />
      </div>
      <div className="card-info">
        <div className="info-user">
          <img src={data.author.avatar} />
          <a href="/profile">{data.author.firstName}</a>
        </div>
        <div className="text-card">
        <h4>{data.title}</h4>
        <p className="description">{data.description}</p>
        <p>{data.direction}</p>
        </div>
       <div className="btn-card">
       <Link to={`/posts/${data.id}`} className="btn">
          More Information
     </Link>
     {isMyPost(data) && (
       <>
         
         <Link to={`/post/edit/${data.id}`} className="btn">
           Edit
         </Link>
         <Link onClick={() => deletePost(data.id)} className="btn">
           Delete
         </Link>
         
       </>
     )}
       </div>
      </div>
    </div>
  );
};
