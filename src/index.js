import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
//estilos e iconos:
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';


const WithRouter = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
