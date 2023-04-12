import React, { useCallback, useEffect, useState } from 'react'
import { getPosts } from '../../../services/PostService';
import { CardPost } from '../../../components/CardPost';
import "./index.css"

export const PostListAll = () => {
  const [posts, setPosts] = useState([]);
  const [selectedButton, setSelectedButton] = useState('');

  useEffect(() => {
    getPosts()
    .then((posts) => {
      setPosts(posts);
    })
    .catch((err) => console.log(err));
  }, []);

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const postsSortByLikes = useCallback(() => {
    setPosts([...posts].sort((a, b) => b.likes.length - a.likes.length));
    setSelectedButton('likes');
  }, [posts]);
  const postsSortByLatest = useCallback(() => {
    setPosts([...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    setSelectedButton('latest');
  }, [posts]);
  const postsSortByOldest = useCallback(() => {
    setPosts([...posts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    setSelectedButton('oldest');
  }, [posts]);

  return (
    <div className='post-list-all'>
    <div className='sort-buttons'>
    <button onClick={postsSortByLikes} className={selectedButton === 'likes' ? 'selected' : ''}>Most Liked</button>
    <button onClick={postsSortByLatest}  className={selectedButton === 'latest' ? 'selected' : ''}>Latest Posts</button>
    <button onClick={postsSortByOldest}className={selectedButton === 'oldest' ? 'selected' : ''} >Oldest Post</button>
    </div>
    {posts.map((post) => <CardPost data={post} key={post.id} onDeletePost={handleDeletePost} />)}
    </div>
    )
  }
  