export function todoReducer(state, action) {
  const id = action.payload.id
  switch (action.type) {
    case "LOAD_TODO":
      return action.payload
    case "TOGGLE_TODO":
      const newState = [...state]
      return newState.map((value) => {
        if (value.id === id) {
          return action.payload
        }
        return value
      })
    case "DELETE_TODO":
      return state.filter((value) => value.id !== id);
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state
  }
}