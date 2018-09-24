import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from './reducers';
import { createStore } from 'redux';

const store = createStore(counter);

const render = () => ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch}/>, document.getElementById('root'));

render();
store.subscribe(render);

registerServiceWorker();
