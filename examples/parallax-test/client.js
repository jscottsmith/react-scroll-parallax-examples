import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'dev') {
    ReactDOM.hydrate(<App />, root);
} else {
    ReactDOM.render(<App />, root);
}
