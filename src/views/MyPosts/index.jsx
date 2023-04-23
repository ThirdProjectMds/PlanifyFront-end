import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { myPost } from "../../services/PostService";
import { CardPost } from "../../components/CardPost";
import "./index.css";
import { Link } from "react-router-dom";
export const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    myPost()
      .then((myPostsResponse) => {
        setMyPosts(myPostsResponse);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="profile">
      <h1>My posts</h1>

      <div>
        <Link className="btn" to={"/profile/likes"}>
          My liked posts
        </Link>
        <Link className="btn" to={"/profile"}>
          Profile
        </Link>
      </div>
      {myPosts.length === 0 && (
        <div className="empty-list">
          <h2>You don't have posts yet</h2>
        </div>
      )}
      {myPosts.map((post) => (
        <CardPost data={post} key={post.id} />
      ))}
    </div>
  );
};
