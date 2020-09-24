import 'core-js/es/map';
import 'core-js/es/set';
// import 'react-app-polyfill/ie9';
// import 'react-app-polyfill/stable';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import Main from './Main/main';
import 'antd/dist/antd.css';
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
