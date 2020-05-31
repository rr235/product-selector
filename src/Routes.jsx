import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Start from './views/Start';
import Questions from './views/Questions';

const PATHS = {
  HOME: '/',
  QUESTIONS: '/questions',
};

const Routes = () => (
  <Switch>
    <Route
      path={PATHS.HOME}
      exact
      render={(props) => <Start {...props} redirectUrl={PATHS.QUESTIONS} />}
    />
    <Route path={PATHS.QUESTIONS}>
      <Questions />
    </Route>
  </Switch>
);

export default Routes;
