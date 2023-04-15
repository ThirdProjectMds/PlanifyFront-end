import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const comment = (postId, userId, content) => {
  const data = {userId, content}
  return authenticatedHttp.post(`planify/v1/posts/${postId}/comment`, data)
}
