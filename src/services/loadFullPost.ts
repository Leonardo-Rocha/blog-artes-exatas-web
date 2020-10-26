import FullPost from '../interfaces/fullPost';
import api from './api';

async function loadFullPost(id: number): Promise<FullPost | undefined> {
  if (id) {
    const response = await api.get<FullPost>(`/posts/${id}`);
    return response.data;
  }

  return undefined;
}

export default loadFullPost;
