import { Dispatch } from "redux";
import Web3 from "web3";
import ActionType from "../action-types";
import { ConnectionSuccessPayload } from "../actions";
import config from "../../../config/config";
import type {} from "redux-thunk/extend-redux";
import fetchData from "../../data/action-creators";

export const connectRequest = () => ({
  type: ActionType.CONNECTION_REQUEST,
});

export const connectSuccess = (payload: ConnectionSuccessPayload) => ({
  type: ActionType.CONNECTION_SUCCESS,
  payload,
});

export const connectFailed = (payload: string) => ({
  type: ActionType.CONNECTION_FAILED,
  payload,
});

export const updateAccountRequest = (payload: any) => ({
  type: ActionType.UPDATE_ACCOUNT,
  payload,
});

export const updateAccount = (account: any) => async (dispatch: Dispatch) => {
  dispatch(updateAccountRequest({ account }));
  dispatch(fetchData());
};

export const connect = () => async (dispatch: Dispatch) => {
  dispatch(connectRequest());
  // Fetch the ABI for the smart contract
  const abiResponse = await fetch("/config/abi.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const abi = await abiResponse.json();
  // Get the current network configuration
  const CONFIG = config;
  // Check if the Ethereum browser extension (e.g. MetaMask) is installed
  const { ethereum } = window as any;
  const web3 = new Web3();
  const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

  if (metamaskIsInstalled) {
    // Set the provider for the Web3 object
    web3.setProvider(ethereum);

    // Get the current gas price
    const gasPrice = await web3.eth.getGasPrice();

    try {
      // Request the user's accounts
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // Get the current network ID
      const networkId = await ethereum.request({
        method: "net_version",
      });

      // Check if the user is on the correct network
      // eslint-disable-next-line eqeqeq
      if (networkId == CONFIG.NETWORK.ID) {
        // Create a new contract object using the ABI and contract address
        const SmartContractObj = new web3.eth.Contract(abi, CONFIG.CONTRACT_ADDRESS);
        // Dispatch a success action to the store
        dispatch(
          connectSuccess({
            account: accounts[0],
            smartContract: SmartContractObj,
            web3,
            gasPrice,
          })
        );
        
        dispatch(updateAccount(accounts[0]));
        // Add listeners to handle account and chain changes
        ethereum.on("accountsChanged", () => {
          dispatch(updateAccount(accounts[0]));
        });
        ethereum.on("chainChanged", () => {
          window.location.reload();
        });
      } else {
        // Dispatch a failed action if the user is not on the correct network
        dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}`));
      }
    } catch (err) {
      // Dispatch a failed action if an error occurs
      dispatch(connectFailed("Something went wrong."));
    }
  } else {
    // Dispatch a failed action if the Ethereum browser extension is not installed
    dispatch(
      connectFailed(
        "Install Metamask extension. If you're on mobile, please use Metamask app browser."
      )
    );
  }
};

export default connectRequest;
