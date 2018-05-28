import { createStore, combineReducers } from 'redux';

// Reducers
import { planReducer } from './plan';

// Combine Reducers
var reducers = combineReducers({
  planlist: planReducer
});

const store = createStore(reducers);
export default store;
