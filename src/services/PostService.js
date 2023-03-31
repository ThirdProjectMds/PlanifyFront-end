import { createHttp } from "./BaseService";

const http = createHttp(false);

export const getPosts = () => {
  return http.get("/planify/v1/posts");
};
