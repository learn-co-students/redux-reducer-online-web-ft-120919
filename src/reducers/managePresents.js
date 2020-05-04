export const managePresents =  (state, action) => {
  let increased = { numberOfPresents: state.numberOfPresents + 1 };
  let [def, increaseOrNot] = [{ numberOfPresents: 0 }, action.type === "INCREASE"]
  return increaseOrNot ? increased : def;
}
 