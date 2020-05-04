export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND" :
            let friends = state.friends 
            friends.push(action.friend)
            return {friends}
        case "REMOVE_FRIEND" :
           return {friends: state.friends.filter(friend => friend.id != action.id)}           
    
        default: 
            return {friends: state.friends}
    }
}
