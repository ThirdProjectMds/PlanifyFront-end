import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export const Profile = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className="profile">
    <h1>Profile</h1>
    <h3>{currentUser.firstName}</h3>
    </div>
  )
}
