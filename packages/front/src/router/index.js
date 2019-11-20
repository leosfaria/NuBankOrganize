import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
