import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles.css';

import debug from 'debug';
import React from 'react';
import Prefixer from './components/Prefixer';

const APP_ROOT = document.createElement('div');
document.body.appendChild(APP_ROOT);

React.render(<Prefixer />, APP_ROOT);
