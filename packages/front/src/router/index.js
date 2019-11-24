import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Details } from '../pages';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details" component={Details} />
    </Switch>
  </BrowserRouter>
);
