export function managePresents(state = {numberOfPresents: 0}, action){
  if (action.type === 'INCREASE') {
    return { numberOfPresents: state.numberOfPresents + 1}
  }
  return state
}
