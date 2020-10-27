import isImageUrl from './isImageUrl';

function getYoutubeId(url: string): string {
  return url.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
}

function getImageFromUrl(url: string): string {
  if (isImageUrl(url)) {
    return url;
  }

  return `https://img.youtube.com/vi/${getYoutubeId(url)}/hqdefault.jpg`;
}

export default getImageFromUrl;
