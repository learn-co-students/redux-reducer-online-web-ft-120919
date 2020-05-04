export function manageFriends(state = { friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return { ...state, friends: [...state.friends, action.friend] }
        case "REMOVE_FRIEND":
            const thisFriend = state.friends.find(friend => friend.id === action.id)
            const thisFriendIndex = state.friends.indexOf(thisFriend)
            return { ...state, friends: [...state.friends.slice(0, thisFriendIndex), ...state.friends.slice(thisFriendIndex + 1)] }
        default:
            return state
    }
}
