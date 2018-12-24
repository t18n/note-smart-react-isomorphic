import Home from 'src/Containers/Home';
import Login from 'src/Containers/Login';
import NotFound404 from 'src/Containers/404';
import Posts from 'src/Containers/Posts';

import loadData from 'src/helpers/loadData';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/login', component: Login },
  { path: '/posts', component: Posts, loadData: () => loadData('posts') },
  { component: NotFound404 },
];

export default routes;
