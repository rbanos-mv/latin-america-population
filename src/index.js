import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { REGION } from './modules/environment';
import store from './redux/configureStore';
import { getCountries } from './redux/countries/countries';

store.dispatch(getCountries(REGION));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
