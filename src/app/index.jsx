import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import messageReducer from './reducers/messageReducer';
import App from './components/App';

let store = createStore(messageReducer);

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
