import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const comment = (postId, userId, content) => {
  const data = {userId, content}
  return authenticatedHttp.post(`planify/v1/posts/${postId}/comment`, data)
}

export const editComment = (postId, commentId, content) => {
  return authenticatedHttp.put(`/planify/v1/posts/comment/${commentId}/edit`, {postId,  content });
};

export const deleteCommment = (id) => authenticatedHttp.delete(`/planify/v1/posts/${id}/comment`)