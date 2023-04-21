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
      <h1>Profile</h1>
      <h3>{currentUser.firstName}</h3>
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