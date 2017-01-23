const rootReducer = (state, action) => {
  switch (action.type) {
    case 'PUT_BIOGRAPHY':
      return state;
    case 'BIOGRAPHY_PUT_SUCCEEDED':
      return Object.assign({}, state, {biography: action.payload});
    case 'BIOGRAPHY_FETCH_SUCCEEDED':
      return Object.assign({}, state, {biography: action.biography});
    case 'IMAGE_UPLOAD_SUCCEEDED':
      console.log('upload succeeded, new image: ' + action.newImageURL);
      return Object.assign({}, state, {image: action.newImageURL});
    case 'IMAGE_UPLOAD_FAILED':
      console.log(action);
      return state;

    default:
      console.log('rootReducer(): unhandled action: ' + action.type);
      return state;
  }
};

export default rootReducer;