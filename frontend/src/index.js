import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'


import thunk from 'redux-thunk';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
  reducer,
  composeEnhancers(
      applyMiddleware(logger, thunk)
  )
)

ReactDOM.render(<Provider store={store}>
  <MuiThemeProvider>
  <BrowserRouter forceRefresh={true} ><App /></BrowserRouter>
  </MuiThemeProvider>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
