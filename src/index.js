import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './reset.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/index';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

const provider = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(provider, document.getElementById('root'));
