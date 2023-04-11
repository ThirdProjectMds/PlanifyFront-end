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
import { EditPost } from "./views/Post/PostEdit";
import { SignUp } from "./views/SignUp";
import { PostCategories } from "./views/Post/PostCategories";
import { PostList } from "./views/Post/PostList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="posts/:id" element={<PostDetail />} />
          <Route path="posts" element={<PostList />} />
          <Route path="posts/category/:category" element={<PostList />} />

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
          <Route
            path="/post/edit/:id"
            element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/post-categories" element={<PostCategories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
