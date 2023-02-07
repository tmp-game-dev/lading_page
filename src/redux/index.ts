import { combineReducers } from "redux"
import blockchainReducer from "./blockchain/reducers/blockchainReducer"
import dataReducer from "./data/reducers/dataReducer";

const reducers = combineReducers({
    blockchain: blockchainReducer,
    data: dataReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>