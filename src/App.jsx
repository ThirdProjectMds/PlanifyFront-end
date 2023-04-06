import "./App.css";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthContext from "./contexts/AuthContext";
import { Profile } from "./views/Profile";
import { Login } from "./views/Login";
import { Home } from "./views/Home";
import { PostDetail } from "./views/Post/PostDetail";
import { CreatePost } from "./views/Post/PostCreate";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="posts/:id" element={<PostDetail />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="create-post"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
