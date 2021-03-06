import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { apiMiddleware } from 'redux-api-middleware';

import Root from './js/components/Root/Root';
import reducers from './js/reducers/index';

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>
    , document.querySelector('.main-container')
);