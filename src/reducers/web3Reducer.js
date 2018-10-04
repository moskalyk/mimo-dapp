import {
	WEB3_IS_LOADING,
	WEB3_SUCCESS,
	WEB3_FAILURE
} from '../actions/web3Actions.js';

// Initial State
const initialState = {
	web3: null,
	account: null,
	web3Error: null,
	web3IsLoading: true
}

export default (state = initialState, action) => {
	switch(action.type){
		case WEB3_IS_LOADING:
			return {...state, web3IsLoading: action.payload.bool};
		case WEB3_SUCCESS:
			return {...state, account: action.payload.account, web3: action.payload.web3};
		case WEB3_FAILURE:
			return {...state, web3Error: action.payload.error};
		default:
			return state;
	}
}