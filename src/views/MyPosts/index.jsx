import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { myPost } from "../../services/PostService";
import { CardPost } from "../../components/CardPost";
import "./index.css"
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
      <Link className="btn" to={"/profile/likes"}>My liked posts</Link>
      
      {myPosts.map((post) => (
        <CardPost data={post} key={post.id} />
      ))}
    </div>
  );
};