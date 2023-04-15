import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const like = (postId, userId) => {
  const data = { userId };
  console.log(postId, data);
  return authenticatedHttp.post(`/planify/v1/posts/${postId}/like`, data);
};