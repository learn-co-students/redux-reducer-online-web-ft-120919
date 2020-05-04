export const manageFriends = (state, action) => {
  if (action.type === "ADD_FRIEND") {
    state.friends.push({
      name: action.friend.name,
      hometown: action.friend.hometown,
      id: action.friend.id,
    });
    return state;
  } else if (action.type === "REMOVE_FRIEND") {
    let result = { friends: [] };
    state.friends.forEach((friend, index) => {
      friend.id === action.id ? result.friends.push(friend) : null;
    });
    let difference = state.friends.filter((x) => !result.friends.includes(x));
    return { friends: difference };
  } else {
    return state;
  }
};
