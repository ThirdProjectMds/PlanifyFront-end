import React, { useEffect, useState } from "react";
import { CardPost } from "../../../components/CardPost";
import { getPosts } from "../../../services/PostService";
import "./index.css";
import { useParams } from "react-router-dom";

export const PostList = ({Posts}) => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    category ? category : null
  );

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="post-list">
      {posts.length === 0 &&
        <div className='empty-list'>
          <h2>No posts in this category</h2>
        </div> 
      }
      {posts
        .filter((post) =>
          selectedCategory ? post.category === selectedCategory : true
        )
        .map((post) => (
          <CardPost data={post} key={post.id} />
        ))}
    </div>
  );
};
