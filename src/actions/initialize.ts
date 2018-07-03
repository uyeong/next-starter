import { Dispatch } from 'redux';

export enum ActionTypes {
  LoadInitialData = 'loadInitialData',
}

interface Initialize {
  type: typeof ActionTypes.LoadInitialData;
}

export type Action = Initialize;

export const loadInitialData = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.LoadInitialData });
};
