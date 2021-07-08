import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import { articleReducer } from './store/reducer';

// https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/
// stopped at "Create a store"

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(articleReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
