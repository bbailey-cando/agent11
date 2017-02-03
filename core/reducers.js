const rootReducer = (state, action) => {
  switch (action.type) {
    case 'PUT_BIOGRAPHY':
      return state;

    case 'BIOGRAPHY_PUT_SUCCEEDED':
      return Object.assign({}, state, {biography: action.payload});
    case 'BIOGRAPHY_FETCH_SUCCEEDED':
      return Object.assign({}, state, {biography: action.biography});

    case 'UPLOAD_IMAGE':
      return Object.assign({}, state, {imageUploadProgress:1});
    case 'IMAGE_UPLOAD_SUCCEEDED':
      return Object.assign({}, state, {image: action.newURL, imageUploadProgress:null});
    case 'IMAGE_UPLOAD_FAILED':
      console.log(action);
      return state;
    case 'IMAGE_UPLOAD_SNAPSHOT':
      return Object.assign(
        {},
        state,
        {imageUploadProgress: (action.progress == 0 ? 1 : action.progress)}
      );

    case 'FETCH_IMAGE_URL':
      return state;
    case 'PUT_IMAGE_URL':
      return Object.assign({}, state, {image: action.newURL});
    case 'IMAGE_URL_PUT_SUCCEEDED':
      return state;
    case 'IMAGE_URL_FETCH_SUCCEEDED':
      return Object.assign({}, state, {image: action.imageURL});

    case 'FETCH_TOUR_DATES':
      console.log('fetching tour dates');
      return state;
    case 'TOUR_DATE_FETCH_SUCCEEDED':
      return Object.assign({}, state, {tourDates: action.payload});
    case 'TOUR_DATE_FETCH_FAILED':
      console.log(action);
      console.log('fetch failed, json = ');
      console.log(JSON.parse(action.payload));
      return state;

    default:
      console.log('rootReducer(): unhandled action: ' + action.type);
      return state;
  }
};

export default rootReducer;