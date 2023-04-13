const urlParser = (txt: string) => {
  const urlRegex = /\[(.*?)\]\((.*?)\)/g;
  const hrefRegex = /\((.*?)\)/;
  const labelRegex = /\[(.*?)\]/;
  const urlFound = txt.match(urlRegex);
  let urlArray = [];
  if (urlFound) {
    urlArray = urlFound.map(urlString => {
      const href = urlString.match(hrefRegex)[0].slice(1, -1);
      const label = urlString.match(labelRegex)[0].slice(1, -1);
      return { href, label };
    });
  }
  urlArray.forEach(url => {
    txt = txt.replace(
      /\[(.*?)\]\((.*?)\)/,
      `<a href="${url.href}" target="_blank" rel="noreferrer" >${url.label}</a>`
    );
  });
  return txt;
};

export default urlParser;
