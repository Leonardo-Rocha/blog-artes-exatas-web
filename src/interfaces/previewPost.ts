import Post from './post';

type PreviewPost = Omit<Post, 'content'>;

export default PreviewPost;
