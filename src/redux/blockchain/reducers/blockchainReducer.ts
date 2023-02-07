import { Action, InitialState } from "../actions";
import ActionType from "../action-types";

const initialState: InitialState = {
  loading: false,
  account: null,
  smartContract: null,
  gasPrice: "0",
  web3: null,
  errorMsg: "",
};

const blockchainReducer = (
    // eslint-disable-next-line default-param-last
    state: InitialState = initialState,
    action: Action
) => {
  switch (action.type) {
    case ActionType.CONNECTION_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case ActionType.CONNECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        smartContract: action.payload.smartContract,
        gasPrice: action.payload.gasPrice,
        web3: action.payload.web3,
      };
    case ActionType.CONNECTION_FAILED:
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case ActionType.UPDATE_ACCOUNT:
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
