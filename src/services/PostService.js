import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getPosts = () => {
  return unauthenticatedHttp.get("/planify/v1/posts");
};

export const postDetail = (id) =>
  unauthenticatedHttp.get(`/planify/v1/posts/${id}`);

export const createPost = (post) => authenticatedHttp.post("/planify/v1/posts", post);
