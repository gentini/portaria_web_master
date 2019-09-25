import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import './app.css';

import Dashboard from './pages/Dashboard';

import store from './store';

function App() {
  useEffect(() => {
    // Init materialize js
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
