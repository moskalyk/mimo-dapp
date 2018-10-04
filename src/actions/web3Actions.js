import getWeb3 from '../utils/getWeb3';
import getAccounts from '../utils/getAccounts';

// Web3 Actions
export const WEB3_IS_LOADING = "WEB3_IS_LOADING";
export const WEB3_SUCCESS = "WEB3_SUCCESS";
export const WEB3_FAILURE = "WEB3_FAILURE";


export function web3IsLoading(bool) {
	return {
		type: WEB3_IS_LOADING,
		payload: {
			web3IsLoading: bool
		}
	}
}

export function web3LoadedSuccessfully(web3, account) {
	return {
		type: WEB3_SUCCESS,
		payload: {
			web3: web3,
			account: account
		}
	}
}

export function web3LoadedFailed(error) {
	return {
		type: WEB3_SUCCESS,
		payload: {
			web3Error: error
		}
	}
}

// Action Creators
export const fetchWeb3 = () => async (dispatch, getState) => {

	dispatch(web3IsLoading(true));

	try{
		const web3 = await getWeb3();
	    const accounts = await getAccounts(web3);
    	dispatch(web3LoadedSuccessfully(web3, accounts[0]));
	    
	}catch(e) {
		dispatch(web3LoadedFailed(e));
	}

	dispatch(web3IsLoading(false));
}