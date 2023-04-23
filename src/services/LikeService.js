import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const like = (postId, userId) => {
  const data = { userId };
  return authenticatedHttp.post(`/planify/v1/posts/${postId}/like`, data);
};

export const dislike = (postId, userId) => {
  const data = { userId };
  return authenticatedHttp.delete(`/planify/v1/posts/${postId}/like`, data);
};
export const myLiked = () => authenticatedHttp.get(`/planify/v1/posts/likes/me`)