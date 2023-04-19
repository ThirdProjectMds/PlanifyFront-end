import React, { useContext, useEffect, useState } from 'react'
import { myLiked } from '../../services/LikeService'
import AuthContext from '../../contexts/AuthContext'

export const ProfileLikes = () => {
  const {currentUser} = useContext(AuthContext)
  const [myLikedPosts, setMyLikedPosts] = useState({})

  useEffect(()=> {
  myLiked()
  .then(((myLikedPostsResponse)=> {
    setMyLikedPosts(myLikedPostsResponse)
  }))
  .catch((err) => console.log(err));

  }, [])

  return (
    <div className='profile-likes'>
    <h1>Profile</h1>
    <h3>{currentUser.firstName}</h3>

    </div>
  )
}
