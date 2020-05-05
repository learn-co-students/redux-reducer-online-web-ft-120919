export function manageFriends(state = { friends: [] }, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: state.friends.concat(action.friend)}
      break;
    case 'REMOVE_FRIEND':
      let f = [...state.friends]
      let q = f.find(friend => friend.id === action.id)
      if (q) {
        console.log(`friend found to remove: ${q.id}`)
        let i = f.indexOf(q)
        console.log(`index in array: ${i}`)
        let newArray = []
        newArray = newArray.concat(f.slice(0,i), f.slice(i+1))
        return { friends: newArray}
      } else {
        return f
      }
      break;
    default:
      return state
  }
}
