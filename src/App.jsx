import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { Profile } from "./views/Profile";
import { Login } from "./views/Login";
import {LoginGoogle } from "./views/LoginGoogle";
import { Home } from "./views/Home";
import { PostDetail } from "./views/Post/PostDetail";
import { CreatePost } from "./views/Post/PostCreate";
import { EditPost } from "./views/Post/PostEdit";
import { SignUp } from "./views/SignUp";
import { PostCategories } from "./views/Post/PostCategories";
import { PostList } from "./views/Post/PostList";
import { PostListAll } from "./views/Post/PostListAll";
import { CommentForm } from "./components/CommentForm";
import { ProfileLikes } from "./views/ProfileLikes";
import { MyPosts } from "./views/MyPosts";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/validation" element={<LoginGoogle />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/category/:category" element={<PostList />} />
          <Route path="/posts" element={<PostListAll />} />

          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="my-posts"
            element={
              <ProtectedRoute>
                <MyPosts />
              </ProtectedRoute>
            }
          />
          <Route
          path="profile/likes"
          element={
            <ProtectedRoute>
              <ProfileLikes />
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
          <Route path="/comment/:id/edit" element={<CommentForm/>} ></Route>
        </Routes>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
