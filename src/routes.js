import Home from 'src/Pages/Home';
import Login from 'src/Pages/Login';
import NotFound404 from 'src/Pages/404';
import Posts from 'src/Pages/Posts';
import Books from 'src/Pages/Books';

import { fetchAllBooks, fetchAllPosts } from 'src/utils/loadData';

const routes = lang => [
  { path: `/${lang}/`, exact: true, component: Home },
  { path: `/${lang}/login`, component: Login },
  { path: `/${lang}/books`, component: Books, loadData: () => fetchAllBooks() },
  { path: `/${lang}/posts`, component: Posts, loadData: () => fetchAllPosts() },
  { component: NotFound404 },
];

export default routes;
