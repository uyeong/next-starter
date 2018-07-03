import { Action as InitializeAction, ActionTypes as InitializeActionTypes } from 'actions/initialize';

/* tslint:disable:no-empty-interface */
export interface AppState {}

const initialState = {};

const app = (state: AppState = initialState, action: InitializeAction) => {
  switch (action.type) {
    case InitializeActionTypes.LoadInitialData:
    default:
      return state;
  }
};

export default app;
