import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";



library.add(fab, fas);


ReactDOM.render(<App />, document.getElementById('root'));
