import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducers from './missions/Mission';
import rocketReducer from './Rockets/rockets';
import dragonsReducer from './dragons/dragons';

const reducer = combineReducers({
  missions: missionsReducers,
  rockets: rocketReducer,
  dragons: dragonsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
