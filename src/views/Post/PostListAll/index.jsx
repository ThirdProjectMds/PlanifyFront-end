import React, { useCallback, useEffect, useState } from 'react';
import { getPosts } from '../../../services/PostService';
import { CardPost } from '../../../components/CardPost';
import "./index.css"

export const PostListAll = () => {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [selectedButton, setSelectedButton] = useState('');
  const [noMorePosts, setNoMorePosts] = useState(true)
  useEffect(() => {
    getPosts()
    .then((posts) => {
      setPosts(posts);
      setDisplayedPosts(posts.slice(0, 5));
    })
    .catch((err) => console.log(err));
  }, []);

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    setDisplayedPosts(displayedPosts.filter((post) => post.id !== id));
  };

  const addRandomPosts = useCallback(() => {
    const remainingCount = posts.length - displayedPosts.length;
    if (remainingCount > 0) {
      const remainingPosts = posts.filter((post) => !displayedPosts.includes(post));
      const randomIndices = new Set();
      while (randomIndices.size < Math.min(5, remainingCount)) {
        randomIndices.add(Math.floor(Math.random() * remainingPosts.length));
      }
      const randomPosts = Array.from(randomIndices).map((index) => remainingPosts[index]);
      setDisplayedPosts([...displayedPosts, ...randomPosts]);
      if (remainingCount <= 5) {
        setNoMorePosts(true);
      }
      setSelectedButton('more');
    } else {
      setNoMorePosts(false);
    }
  }, [posts, displayedPosts]);

  const postsSortByLikes = useCallback(() => {
    setDisplayedPosts([...displayedPosts].sort((a, b) => b.likes.length - a.likes.length));
    setSelectedButton('likes');
  }, [displayedPosts]);

  const postsSortByLatest = useCallback(() => {
    setDisplayedPosts([...displayedPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    setSelectedButton('latest');
  }, [displayedPosts]);

  const postsSortByOldest = useCallback(() => {
    setDisplayedPosts([...displayedPosts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    setSelectedButton('oldest');
  }, [displayedPosts]);

  return (
    <div className='post-list-all'>
      <div className='sort-buttons'>
        <button onClick={postsSortByLikes} className={selectedButton === 'likes' ? 'selected' : ''}>Most Liked</button>
        <button onClick={postsSortByLatest}  className={selectedButton === 'latest' ? 'selected' : ''}>Latest Posts</button>
        <button onClick={postsSortByOldest} className={selectedButton === 'oldest' ? 'selected' : ''} >Oldest Post</button>
        </div>
        
        {displayedPosts.map((post) => <CardPost data={post} key={post.id} onDeletePost={handleDeletePost} />)}
       {noMorePosts && 
        <div className='add-more' > 
       
       <button  onClick={addRandomPosts} className={selectedButton === 'more' ? 'selected' : ''}>More posts</button>
       </div>
      
      }
    </div>
  );
}