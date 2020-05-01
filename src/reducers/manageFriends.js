export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      console.log(action.friend)
      console.log(state)

      return { friends: [Object.assign({}, state.friends, action.friend)] }
    case 'REMOVE_FRIEND':
      return {}
    default:
      return state
  }
}
