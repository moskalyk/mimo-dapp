// Search
export const SEARCH_PROFILE_IS_LOADING = "SEARCH_PROFILE_IS_LOADING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILED = "SEARCH_FAILED";

// Update Profile
export const UPDATE_PROFILE_IN_PROGRESS = "UPDATE_PROFILE_IN_PROGRESS";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILED = "UPDATE_PROFILE_SUCCESS";

export const CANCEL_UPDATE_PROFILE = "CANCEL_UPDATE_PROFILE";
export const PROFILE_CAN_BE_UPDATED = "PROFILE_CAN_BE_UPDATED";


export function profileIsLoading(bool, e) {
	return {
		type: SEARCH_PROFILE_IS_LOADING,
		payload: {
			bool: bool,
			error: e
		}
	}
}

export function profileSearchSuccessful(bool, name, bio) {
	return {
		type: SEARCH_SUCCESS,
		payload: {
			isSucessful: bool,
			profileName: name,
			profileBio: bio
		}
	}
}

export function profileSearchFailed() {
	return {
		type: SEARCH_FAILED,
	}
}

export function updateProfile() {
	return {
		type: UPDATE_PROFILE_IN_PROGRESS,
	}
}

export function profileCanBeUpdated() {
	return {
		type: PROFILE_CAN_BE_UPDATED,
	}
}

export function submitProfile(bio) {
	return {
		type: UPDATE_PROFILE_SUCCESS,
		payload: {
			profileBio: bio
		}
	}
}

export function cancelUpdateProfile() {
	return {
		type: CANCEL_UPDATE_PROFILE,
	}
}


// Move to Web3 Actions?
export const postProfile = (bio) => async (dispatch, getState) => {
	const { mimo, profileName } = getState().profileReducer;
	const { account, web3 } = getState().web3Reducer;

	dispatch(profileIsLoading(true));

	try{
		const result = await web3.eth.sign(web3.utils.sha3(bio), account); //TODO: Use EIP 712
		dispatch(submitProfile(bio))
	}catch(e){
		dispatch(profileIsLoading(false));
		dispatch(cancelUpdateProfile());
	}
}

// Action Creators
export const fetchProfile = (name) => (dispatch, getState) => {

	console.log('Fetching Profile')
	dispatch(profileIsLoading(true));

	const { mimo, account } = getState();

	// TODO: Replace with mimo object
	setTimeout(() => {

		const profile = {
			name: name,
			bio: "My Bio ..."
		}

		// Get Mimo


		// Check if valid name
		if(profile.name.substr(profile.name.length - 4) != '.eth')
			dispatch(profileSearchFailed())
		else{
			// Get profileState

			// Check if name matches state account
			// dispatch(profileCanBeUpdated())
			dispatch(profileSearchSuccessful(true, profile.name, profile.bio));
		}

			


		dispatch(profileIsLoading(false));

    }, 1000);

}