import React from 'react';

import getImageFromUrl from '../../utils/getImageFromUrl';

import { PostBannerPreviewContainer } from './styles';

interface Props {
  title: string;
  url: string;
}

const PostBannerPreview: React.FC<Props> = ({ title, url }) => (
  <PostBannerPreviewContainer
    url={getImageFromUrl(url)}
    title={title}
  />
);

export default PostBannerPreview;
