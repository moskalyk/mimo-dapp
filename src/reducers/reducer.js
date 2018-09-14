// Import Actions
const initialState = {
	greeting: "Howdie ho"
}

// Reducers
export const reducer = (state = initialState, action ) => {
	console.log(action);
	console.log(state);
	switch(action.type) {
		case "FOLLOW_PROFILE":
			console.log('Follow Profile')
			return state
			break;
		case "REGISTER_PROFILE":
			console.log('Registering Profile')
			return state;
			break;
		default:
			return state;
	}
}