import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorBox from './color-box';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ColorBox/>, document.getElementById('root'));
registerServiceWorker();
