import ReactDOM from 'react-dom';
import React from 'react';
import TodoContainer from '../containers/todo_container.jsx';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import TodoReducer from '../reducers/todo_reducer.js';
import { Provider } from 'react-redux';
require("turbolinks")
Turbolinks.start()
//import Turbolinks from 'turbolinks';

//var store = applyMiddleware(thunkMiddleware)(createStore)(TodoReducer);
//
//Turbolinks.start();
var store = createStore(TodoReducer, {}, compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

ReactDOM.render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('app')
)