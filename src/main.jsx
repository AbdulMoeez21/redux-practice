import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider, useStore } from 'react-redux';
import rootReducer from '../src/services/Reducer/index';

const store = createStore(rootReducer);
console.warn('store data ', store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
