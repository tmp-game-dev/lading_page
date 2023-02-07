import ActionType from "../action-types";
import { Action, InitialState } from "../actions";


const initialState: InitialState = {
    loading: false,
    imageTokens: [],
    error: false,
    errorMsg: "",
  };

const dataReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.CHECK_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case ActionType.CHECK_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        imageTokens: action.payload,
        error: false,
        errorMsg: "",
      };
    case ActionType.CHECK_DATA_FAILED:
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
