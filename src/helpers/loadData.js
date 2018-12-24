import 'isomorphic-fetch';

export default resourceType => fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(res => res.json())
  .then(data => data.filter((_, idx) => idx < 10));
