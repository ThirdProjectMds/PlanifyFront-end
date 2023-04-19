import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { myPost } from "../../services/PostService";
import { CardPost } from "../../components/CardPost";
import "./index.css"
export const Profile = () => {
  const { currentUser } = useContext(AuthContext);
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
      <h1>Profile</h1>
      <h3>{currentUser.firstName}</h3>

      {myPosts.map((post) => (
        <CardPost data={post} key={post.id} />
      ))}
    </div>
  );
};






