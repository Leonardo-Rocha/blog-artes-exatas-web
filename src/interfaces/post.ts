interface Post {
  id: number;
  title: string;
  preview: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  readingTimeInMinutes: number;
  tags: string[];
  videoUrl?: string;
  imageUrl?: string;
}

export default Post;
