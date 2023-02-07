import ActionType from "../action-types";

export interface InitialState {
  loading: boolean;
  account: any;
  smartContract: any;
  gasPrice: string;
  web3: any;
  errorMsg: string;
}

export interface ConnectionSuccessPayload{
  account: any
  smartContract: any
  gasPrice: string
  web3: any
}

interface ConnectionRequestAction {
  type: ActionType.CONNECTION_REQUEST
}

interface ConnectionSuccessAction {
  type: ActionType.CONNECTION_SUCCESS
  payload: ConnectionSuccessPayload;
}

interface ConnectionFailedAction {
  type: ActionType.CONNECTION_FAILED
  payload: string;
}

interface UpdateAccountAction {
  type: ActionType.UPDATE_ACCOUNT
  payload: any;
}

export type Action =
  | ConnectionRequestAction
  | ConnectionSuccessAction
  | ConnectionFailedAction
  | UpdateAccountAction;
