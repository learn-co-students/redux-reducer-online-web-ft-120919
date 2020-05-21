export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            //return Object.assign({}, state, {friends: state.friends.concat(action.friend)})
            return {...state, friends: state.friends.concat(action.friend)}
        case 'REMOVE_FRIEND':
            let newFriends = state.friends.filter(friend => friend.id !== action.id)
            //return Object.assign({}, state, {friends: newFriends})
            return {...state, friends: newFriends}
        default:
            return state
    }
}
