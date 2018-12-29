import React from 'react';
import universal from 'react-universal-component';
import { Route, Switch } from 'react-router';
import Header from 'src/Components/Header';
import Footer from 'src/Components/Footer';
import Loading from 'src/Components/Loading';
import { RedirectWithStatus } from 'src/Components/SSR';

const UniversalComponent = universal(props => import(`../Pages/${props.page}`), {
  loading: () => <Loading />,
  ignoreBabelRename: true,
});

export default ({ lang }) => (
  <React.Fragment>
    <Header lang={lang} />

    <Switch>
      <Route
        exact
        path="/:lang"
        render={routeProps => <UniversalComponent page="Home" {...routeProps} />}
      />

      <Route
        exact
        path="/:lang/login"
        render={routeProps => <UniversalComponent page="Login" {...routeProps} />}
      />

      <Route
        exact
        path="/:lang/books"
        render={routeProps => <UniversalComponent page="Books" {...routeProps} />}
      />

      <Route
        exact
        path="/:lang/posts"
        render={routeProps => <UniversalComponent page="Posts" {...routeProps} />}
      />

      <Route
        exact
        path="/:lang/posts/:slug"
        render={routeProps => <UniversalComponent page="Post" {...routeProps} />}
      />

      {/* Define Redirect logic if any */}
      <RedirectWithStatus httpStatus={301} from="/:lang" to={`/${lang}`} />
      <RedirectWithStatus httpStatus={301} from="/:lang/users" to="/" />
      <RedirectWithStatus httpStatus={302} from="/:lang/courses" to="/:lang/404" />

      {/* If url is not defined, go 404 */}
      <Route render={routeProps => <UniversalComponent page="404" {...routeProps} />} />
    </Switch>

    <Footer />
  </React.Fragment>
);
