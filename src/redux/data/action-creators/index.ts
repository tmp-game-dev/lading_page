import { Dispatch } from "redux";
import store from "../../store";
import ActionType from "../action-types";

const fetchDataRequest = () => ({
  type: ActionType.CHECK_DATA_REQUEST,
});

const fetchDataSuccess = (payload: any) => ({
  type: ActionType.CHECK_DATA_SUCCESS,
  payload,
});

const fetchDataFailed = (payload: string) => ({
  type: ActionType.CHECK_DATA_FAILED,
  payload,
});

const fetchData = () => async (dispatch: Dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const kek: string[] = []
    await store
      .getState()
      .blockchain.smartContract.methods.tokensOfOwner(store.getState().blockchain.account)
      .call().then((x:any)=> x.map((token:any) => kek.push(`https://drpunks.mypinata.cloud/ipfs/QmYSQJvjKZFxzu9UGyrbBHzRfkkvhmzFK65zn8uzMtbhcF/${token}.png`)));

    
    dispatch(
      fetchDataSuccess({
        ...kek,
      })
    );
  } catch (err) {
    dispatch(fetchDataFailed("Could not load data from contract."));
  }
};

export default fetchData;
