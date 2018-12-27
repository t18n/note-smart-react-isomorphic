import Home from 'src/Pages/Home';
import Login from 'src/Pages/Login';
import NotFound404 from 'src/Pages/404';
import Posts from 'src/Pages/Posts';

import loadData from 'src/helpers/loadData';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/login', component: Login },
  { path: '/posts', component: Posts, loadData: () => loadData('posts') },
  { component: NotFound404 },
];

export default routes;
