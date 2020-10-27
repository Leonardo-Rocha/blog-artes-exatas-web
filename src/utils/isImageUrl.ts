function isImageUrl(url: string): boolean {
  const result = url.match(/(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpe?g|gif|png))(?:\?([^#]*))?(?:#(.*))?/);
  return !!result;
}

export default isImageUrl;
