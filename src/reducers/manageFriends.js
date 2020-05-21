export function manageFriends(state, action){
    if (action.type == 'ADD_FRIEND') {
      let newFriendsArr =  [...state.friends];
      let newFriend = action.friend;
      newFriendsArr.push(newFriend);
      let copy = {friends: newFriendsArr};
      return copy;
    } else if (action.type =='REMOVE_FRIEND') {
        let newFriendsArr =  [...state.friends];
        let matchId = (element) => element.id==action.id;
        let removeFriendId= newFriendsArr.findIndex(matchId);
        newFriendsArr.splice(removeFriendId, 1);
        let copy = {friends: newFriendsArr};
        return copy;
      } else {
        return state;
      }
}
