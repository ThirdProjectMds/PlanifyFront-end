import { useContext} from "react";
import AuthContext from "../../contexts/AuthContext";
import "./index.css"
import { Link } from "react-router-dom";
export const Profile = () => {
  const { currentUser } = useContext(AuthContext);
 
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div> 
      <Link className="btn" to={"/profile/likes"}>My liked posts</Link>
      <Link className="btn" to={"/my-posts"}>My posts</Link>
      </div>
      <div className="profile-data">
     <div className="avatar">
     <img src={currentUser.avatar}/>
     </div>
     <div className="data">
     <p><b>Name:</b> {currentUser.firstName}</p>
     <p><b>Lastname:</b> {currentUser.lastName}</p>
     <p><b>Email: </b>{currentUser.email}</p>
     </div>
      </div>
    </div>
  );
};






