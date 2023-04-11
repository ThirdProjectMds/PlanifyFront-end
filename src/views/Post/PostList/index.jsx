import React, { useEffect, useState } from "react";
import { CardPost } from "../../../components/CardPost";
import { getPosts } from "../../../services/PostService";
import "./index.css";
import { useParams } from "react-router-dom";


export const PostList = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category ? category : null);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="post-list">
     

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
