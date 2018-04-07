import { createStore, applyMiddleware } from 'redux';
import boardReducer from '../reducers/boardReducer'

export default createStore(
  boardReducer
);