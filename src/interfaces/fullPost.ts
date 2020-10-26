import Post from './post';

type FullPost = Omit<Post, 'preview'>;

export default FullPost;
