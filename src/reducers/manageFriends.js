export function manageFriends(state={friends: []}, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]};
    case "REMOVE_FRIEND":
      const friendsArr = state.friends.filter(friend => friend.id !== action.id);
      return {friends: friendsArr};
    default:
      return state;
  }
}
