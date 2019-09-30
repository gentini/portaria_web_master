import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import Header from './components/Header';

import Routes from './routes';

import './app.css';

// import Dashboard from './pages/Dashboard';

import store from './store';

function App() {
  useEffect(() => {
    // Init materialize js
    M.AutoInit();
  }, []);
  return (
    // <Provider store={store}>
    //   <Dashboard />
    // </Provider>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
