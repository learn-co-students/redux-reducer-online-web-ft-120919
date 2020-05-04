export function manageFriends(state={friends: []}, action){
	switch (action.type) {
		case 'ADD_FRIEND':
			return {friends: [state.friends, action.friend].flat()}
		case 'REMOVE_FRIEND':
			let array = state.friends.filter(friend => friend.id !== action.id)
			return {friends: array }
		default:
			return state
	}
	
}
