import ActionType from "../action-types";

export interface InitialState {
    loading: boolean,
    imageTokens: Array<string>,
    error: boolean,
    errorMsg: string,
}



interface CheckDataRequestAction {
  type: ActionType.CHECK_DATA_REQUEST;
}

interface CheckDataSucessAction {
  type: ActionType.CHECK_DATA_SUCCESS;
  payload: any;
}

interface CheckDataFailedAction {
  type: ActionType.CHECK_DATA_FAILED;
  payload: string;
}

export type Action =
  | CheckDataRequestAction
  | CheckDataSucessAction
  | CheckDataFailedAction;
