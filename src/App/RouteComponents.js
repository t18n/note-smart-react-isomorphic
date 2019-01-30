import React from 'react';
import universal from 'react-universal-component';
import { Route, Switch } from 'react-router';
import Header from 'src/Components/Header';
import Footer from 'src/Components/Footer';
import Loading from 'src/Components/Loading';
import { RedirectWithStatus } from 'src/Components/Route';

/*
* Create a Universal Component template, allowing SSR a component + Code Splitting
*/
const UniversalComponent = universal(props => import(`../Pages/${props.page}`), {
  loading: () => <Loading />,
  ignoreBabelRename: true,
});

export default ({ lang }) => (
  <React.Fragment>
    <Header lang={lang} />

    <Switch>
      <Route exact path="/:lang" render={props => <UniversalComponent page="Home" {...props} />} />
      <Route exact path="/:lang/login" render={props => <UniversalComponent page="Login" {...props} />} />

      <Route exact path="/:lang/books" render={props => <UniversalComponent page="Books" {...props} />} />

      <Route exact path="/:lang/posts" render={props => <UniversalComponent page="Posts" {...props} />} />
      <Route exact path="/:lang/posts/:slug" render={props => <UniversalComponent page="Post" {...props} />} />

      {/* Define Redirect logic if any */}
      <RedirectWithStatus httpStatus={301} from="/:lang" to={`/${lang}`} />
      <RedirectWithStatus httpStatus={301} from="/:lang/users" to="/" />
      <RedirectWithStatus httpStatus={302} from="/:lang/courses" to="/:lang/404" />

      {/* If url is not defined, go 404 */}
      <Route render={props => <UniversalComponent page="404" {...props} />} />
    </Switch>

    <Footer />
  </React.Fragment>
);
