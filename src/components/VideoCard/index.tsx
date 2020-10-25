import React, { useCallback } from 'react';

import { VideoCardContainer } from './styles';

interface Props {
  videoTitle: string;
  videoURL: string;
}

const VideoCard: React.FC<Props> = ({ videoTitle, videoURL }) => {
  const getYoutubeId = useCallback((youtubeURL: string) => youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    ), []);

  const image = `https://img.youtube.com/vi/${getYoutubeId(videoURL)}/hqdefault.jpg`;

  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      title={videoTitle}
    />
  );
};

export default VideoCard;
