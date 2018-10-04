
import {
	SEARCH_PROFILE_IS_LOADING,
	SEARCH_SUCCESS,
	SEARCH_FAILED,
	UPDATE_PROFILE_IN_PROGRESS,
	UPDATE_PROFILE_SUCCESS,
	CANCEL_UPDATE_PROFILE,
	PROFILE_CAN_BE_UPDATED
} from '../actions/profileActions.js';

// Initial State
const initialState = {
	profileIsUpdating: false,
	profileNotFound: false,
	profileIsLoading: false,
	profileCanBeUpdated: true, // TODO: change default to false
	profileName: null,
	profileBio: null
}

export default (state = initialState, action) => {
	switch(action.type){
		case SEARCH_PROFILE_IS_LOADING:
			return {...state,  profileIsLoading: action.payload.bool }
		case SEARCH_SUCCESS:
			return {...state, profileNotFound: false, profileName: action.payload.profileName, profileBio: action.payload.profileBio }
		case SEARCH_FAILED:
			return {...state, profileNotFound: true}
		case UPDATE_PROFILE_IN_PROGRESS:
			return {...state, profileIsUpdating: true }
		case UPDATE_PROFILE_SUCCESS:
			return {...state, profileBio: action.payload.profileBio, profileIsUpdating: false}
		case CANCEL_UPDATE_PROFILE:
			return {...state, profileIsUpdating: false, profileIsLoading: false}
		case PROFILE_CAN_BE_UPDATED:
			return {...state, profileCanBeUpdated: true }
		default:
			return state;
	}
}