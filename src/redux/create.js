import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from './middleware/clientMiddleware';
import transitionMiddleware from './middleware/transitionMiddleware';
import thunkMiddleware from 'redux-thunk';
/* import createLogger from 'redux-logger'; */

export default function createStore(reduxReactRouter, getRoutes, createHistory, client, data) {
  /* const loggerMiddleware = createLogger(); */
  const middleware = [createMiddleware(client), transitionMiddleware, thunkMiddleware];
  /*
    thunkMiddleware 允许我们 dispatch() 函数
    loggerMiddleware 一个很便捷的 middleware，用来打印 action 日志
  */
  let finalCreateStore;
  // 开发者模式
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('../containers/DevTools/DevTools');
    finalCreateStore = compose(
      /*  applyMiddleware() 在 dispatch 机制中引入 Redux Thunk middleware */
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  finalCreateStore = reduxReactRouter({ getRoutes, createHistory })(finalCreateStore);

  const reducer = require('./modules/reducer');
  const store = finalCreateStore(reducer, data);
  // 开发者模式
  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}
