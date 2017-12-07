export default (state = [], action) => {
  switch (action.type) {
    case 'GENERATE_EQUATION':
      return state.concat([action.payload])
    default:
      return state;
  }
}