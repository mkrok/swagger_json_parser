const dataParser = (data: any) => {
  if (!data) return null;
  const { paths, tags } = data;
  const tagsExtended = tags.map(tag => {
    let addToTag = [];
    Object.keys(paths).forEach(pathsKey => {
      if (pathsKey.split('/')[1] === tag.name) {
        addToTag.push({ ...paths[pathsKey], url: pathsKey });
      }
    });
    return { ...tag, added: addToTag };
  });
  return tagsExtended;
};

export default dataParser;
