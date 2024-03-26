/* default */
import './index.css';
/* react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { history } from './Function/history';
/* その他 */
import reportWebVitals from './reportWebVitals';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Router history={history}>
        <App />
    </Router>
);
/*
    <React.StrictMode>
    </React.StrictMode>
*/
reportWebVitals();
