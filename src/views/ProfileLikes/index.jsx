import React, { useContext, useEffect, useState } from 'react'
import { myLiked } from '../../services/LikeService'
import AuthContext from '../../contexts/AuthContext'
import { CardPost } from '../../components/CardPost'
import "./index.css"

export const ProfileLikes = () => {
  const { currentUser } = useContext(AuthContext)
  const [myLikedPosts, setMyLikedPosts] = useState([])

  useEffect(() => {
    myLiked()
      .then((myLikedPostsResponse) => {
        setMyLikedPosts(myLikedPostsResponse)
        console.log(myLikedPostsResponse);
      })
      .catch((err) => console.log(err));
  }, [])
  console.log(myLikedPosts);
  return (
    <div className='profile-likes'>
      <h1>My liked posts</h1>
      {myLikedPosts.length === 0 &&
        <div className='empty-list'>
          <h2>No posts liked</h2>
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