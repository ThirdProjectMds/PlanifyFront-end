import React, { useContext, useEffect, useState } from 'react'
import { myLiked } from '../../services/LikeService'
import AuthContext from '../../contexts/AuthContext'
import { CardPost } from '../../components/CardPost'
import "./index.css"
import { Link } from 'react-router-dom'

export const ProfileLikes = () => {
  const { currentUser } = useContext(AuthContext)
  const [myLikedPosts, setMyLikedPosts] = useState([])

  useEffect(() => {
    myLiked()
      .then((myLikedPostsResponse) => {
        setMyLikedPosts(myLikedPostsResponse)
      })
      .catch((err) => console.log(err));
  }, [])
  return (
    <div className='profile-likes'>
      <h1>My liked posts</h1>
      <div> 
      <Link className="btn" to={"/my-posts"}>My posts</Link>
      <Link className="btn" to={"/profile"}>Profile</Link>
      </div>
      {myLikedPosts.length === 0 &&
        <div className='empty-list'>
          <h2>You don't have posts liked</h2>
        </div> 
      }
      {myLikedPosts.map((post) => (
        <CardPost 
        pageLike={true}
        data={post.postId} 
        key={post._id} 
      />
      ))}
    </div>
  )
}