const urlRegex = /\b(https?:\/\/|www\.)\S+/gm;

const findUrls = (text) => {
  const urls = text.match(urlRegex);
  return urls;
};

const replaceUrlsWithAnchors = (text) => {
  return text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });
};
