export const fetchAllBooks = () => fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => data.filter((_, idx) => idx < 10));

export const fetchAllPosts = async () => {
  const postContext = require.context('../../content', false, /\.md$/);
  const postFiles = await postContext
    .keys()
    .map(filename => postContext(filename));
  return postFiles;
};
