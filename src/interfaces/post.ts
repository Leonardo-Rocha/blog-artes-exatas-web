interface Post {
  title: string;
  preview: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  readingTimeInMinutes: number;
  tags: string[];
  videoUrl: string;
}

export default Post;
