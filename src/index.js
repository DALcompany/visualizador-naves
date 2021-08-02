import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MakeStore } from './Redux/Store'
import { Provider } from 'react-redux'

const store = MakeStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
