import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postDetail, updatePost } from "../../../services/PostService";
import { postSchema } from "../../../utils/schemas/post.schema";
import { CreatePost } from "../PostCreate";

export const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    postDetail(id)
      .then((post) => {
        setPost(post);
        console.log(post);
      })
      .catch((err) => console.log(err));
  }, [id]);


  return (
    <>{(Object.keys(post).length !== 0 ) && <CreatePost editValues={post} />}</>
  );
};
