import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "mobx-react";
import {coordsStore} from "./stores/CoordsStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider todoStore={coordsStore}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
