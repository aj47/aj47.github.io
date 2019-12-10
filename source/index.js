import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import RouterApp from './RouterApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterApp />, document.getElementById('root'));
registerServiceWorker();
