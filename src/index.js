import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
//estilos e iconos:


const WithRouter = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
