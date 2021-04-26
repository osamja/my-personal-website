import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import configureStore from './scripts/Redux/store/configureStore';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop />
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
