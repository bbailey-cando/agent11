const rootReducer = (state, action) => {
  switch (action.type) {
    case 'PUT_BIOGRAPHY':
      return state; // Object.assign({}, state, {biography: action.payload});
    case 'BIOGRAPHY_PUT_SUCCEEDED':
      return Object.assign({}, state, {biography: action.payload});
    case 'BIOGRAPHY_FETCH_SUCCEEDED':
      return Object.assign({}, state, {biography: action.biography});
    default:
      return state;
  }
};

export default rootReducer;