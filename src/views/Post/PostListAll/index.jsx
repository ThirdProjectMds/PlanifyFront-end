import React, { useCallback, useEffect, useState } from 'react'
import { getPosts } from '../../../services/PostService';
import "./index.css"
import { CardPost } from '../../../components/CardPost';

export const PostListAll = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
    .then((posts) => {
      setPosts(posts);
    })
    .catch((err) => console.log(err));
  }, []);

  const postsSortByLikes = useCallback(() => {
    setPosts([...posts].sort((a, b) => b.likes.length - a.likes.length));
    console.log(posts.likes);
  }, [posts]);

  return (
    <div className='post-list-all'>
    <button onClick={postsSortByLikes}>Most Liked</button>
    {posts.map((post) => <CardPost data={post} key={post.id} />)}
    </div>
    )
  }
  