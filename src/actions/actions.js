//TODO: Set up Payload
// Actions
export const followProfileAction = (profile = null) =>  {
	return {
		type: 'FOLLOW_PROFILE',
		// payload: profile 
	}
};

export const registerProfileAction = (name = null) => {
	return {
		type: 'REGISTER_PROFILE',
		// payload: name
	}
};