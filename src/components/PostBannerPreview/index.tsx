import React, { useCallback } from 'react';

import { PostBannerPreviewContainer } from './styles';

interface Props {
  videoTitle: string;
  videoURL: string;
}

const PostBannerPreview: React.FC<Props> = ({ videoTitle, videoURL }) => {
  const getYoutubeId = useCallback((youtubeURL: string) => youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    ), []);

  const image = `https://img.youtube.com/vi/${getYoutubeId(videoURL)}/hqdefault.jpg`;

  return (
    <PostBannerPreviewContainer
      url={image}
      title={videoTitle}
    />
  );
};

export default PostBannerPreview;
