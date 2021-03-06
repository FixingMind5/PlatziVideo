const reducer = (state, action) => {
	switch (action.type) {
		case "SET_FAVORITE":
			return {
				...state,
				myList: [...state.myList, action.payload]
			};
		case "DELETE_FAVORITE":
			return {
				...state,
				myList: state.myList.filter(item => item.id !== action.payload)
			};
		case "LOGIN_REQUEST":
			return {
				...state,
				user: action.payload
			};
		case "LOGOUT_REQUEST":
			return {
				...state,
				user: action.payload
			};
		case "SIGNUP_REQUEST":
			return {
				...state,
				user: action.payload
			};
		case "VIDEO_REQUEST":
			return {
				...state,
				playing: state.trends.find(item => item.id === Number(action.payload)) 
				|| state.originals.find(item => item.id === Number(action.payload)) 
				|| []
			};
		default: return state;
	}
}

export default reducer;