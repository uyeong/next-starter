import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import app, { AppState } from './app';

export interface State {
  app: AppState;
}

const reducers = combineReducers({ app });

export default reducers;

export const initStore = (initialState: State) => {
  return createStore(reducers, initialState, applyMiddleware(thunk));
};
