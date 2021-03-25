import React, { FC, ReactElement, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

import '@assets/global.scss';

const App: FC = (): ReactElement => (
  <Router>
    <Suspense fallback={<div />}>
      <Switch>
        <Route path="/" exact>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...route}
              />
            ))}
          </Switch>
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
