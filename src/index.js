import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
//estilos e iconos:
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
import {Provider} from 'react-redux';
import {configureStore} from "./store/configureStore";

const store = configureStore();

const WithRouter = () => (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);



ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
