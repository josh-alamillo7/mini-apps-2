import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';

console.log(store.getState().gameOver)

ReactDOM.render(
  <Provider store={store}>
    <App gameOver={store.getState().gameOver}/>
  </Provider>, document.getElementById('root'));
  
registerServiceWorker();
