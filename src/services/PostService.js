import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getPosts = () => {
  return unauthenticatedHttp.get("/planify/v1/posts");
};

export const postDetail = (id) =>
  unauthenticatedHttp.get(`/planify/v1/posts/${id}`);

export const createPost = (post) => authenticatedHttp.post("/planify/v1/posts", post);

export const updatePost = (post,id) => authenticatedHttp.put(`/planify/v1/posts/${id}`, post)

export const deletePost = (id) => authenticatedHttp.delete(`/planify/v1/posts/${id}`)

export const getCategoryPost = (category) => unauthenticatedHttp.get(`/planify/v1/posts/${category}`)

export const like = (postId, userId) => {
  const data = { userId };
  return authenticatedHttp.post(`/planify/v1/posts/${postId}/like`, data);
};