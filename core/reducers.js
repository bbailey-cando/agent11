import { combineReducers } from 'redux';

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BIOGRAPHY':
      return Object.assign({}, state, {biography: action.payload});
    default:
      return state;
  }
};

export default rootReducer;