import { Post } from '../types/Post';
import { client } from '../utils/fetchClient';

export const getUserPosts = (userId: number) => {
  if (!userId) {
    return Promise.resolve([]);
  }

  return client.get<Post[]>(`/posts?userId=${userId}`);
};
