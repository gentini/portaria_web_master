import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Dweller from './pages/Dweller';
import Peopletype from './pages/Peopletype';
import People from './pages/People';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/dweller" component={Dweller} />
      <Route path="/peopletype" component={Peopletype} />
      <Route path="/people" component={People} />
    </Switch>
  );
}
