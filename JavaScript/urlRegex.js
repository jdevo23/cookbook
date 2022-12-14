const urlRegex = /\b(https?:\/\/|www\.)\S+/gm;

const returnArrayOfURLs = (text) => {
  const urls = text.match(urlRegex);
  return urls;
};

const wrapUrlsWithAnchorTags = (text) => {
  return text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });
};
