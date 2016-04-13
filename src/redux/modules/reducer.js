import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerStateReducer } from 'redux-router';

import counter from './counter';
import {reducer as form} from 'redux-form';
import setBlog from './blog';

export default combineReducers({
  router: routerStateReducer,
  form,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  uiData: multireducer({
    setBlog: setBlog
  })
});
