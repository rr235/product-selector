import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Start from './views/Start';
import Questions from './views/Questions';
import Results from './views/Results';

const PATHS = {
  HOME: '/',
  QUESTIONS: '/questions',
  RESULTS: '/results',
};

const Routes = () => (
  <Switch>
    <Route
      path={PATHS.HOME}
      exact
      render={(props) => <Start {...props} redirectUrl={PATHS.QUESTIONS} />}
    />
    <Route
      path={PATHS.QUESTIONS}
      render={(props) => <Questions {...props} redirectUrl={PATHS.RESULTS} />}
    />
    <Route path={PATHS.RESULTS}>
      <Results />
    </Route>
  </Switch>
);

export default Routes;
