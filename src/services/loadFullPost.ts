import Post from '../interfaces/post';
import api from './api';

async function loadFullPost(id: number): Promise<Post | undefined> {
  if (id) {
    const data = await api.get(`/posts/${id}`);
    console.log(data);
  }

  return undefined;
}

export default loadFullPost;
