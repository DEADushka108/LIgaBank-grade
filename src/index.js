import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/app/app.jsx';

const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context(`./img/icons`, true, /\.svg$/));

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <App/>
    , rootElement);
