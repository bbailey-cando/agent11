import { put, take } from 'redux-saga/effects';
import store from './store';
var firebase = require('firebase');
import actions from './actions';

// TODO - move this block somewhere better?
// Set the configuration for your app
firebase.initializeApp({
  apiKey: "AIzaSyC9FSioy8maohAerLrTTXs9mfJ1UCrQMY8",
  authDomain: "agent11-api.firebaseapp.com",
  databaseURL: "https://agent11-api.firebaseio.com",
  storageBucket: "agent11-api.appspot.com",
  messagingSenderId: "502119043090"
});

var storage = firebase.storage(); // Get a reference to the storage service, which is used to
var storageRef = storage.ref(); // Create a storage reference from our storage service


// https://console.firebase.google.com/project/agent11-api/database/data
const FirebaseREST = require('firebase-rest').default;
var jsonClient =
  new FirebaseREST.JSONClient('https://agent11-api.firebaseio.com/'); // , { auth: 'SECRET' });

function* putBiography() {
  while(true) {
    const action = yield take("PUT_BIOGRAPHY");
    try {
      yield jsonClient.put('/biography', action.payload);
      yield put({ type: 'BIOGRAPHY_PUT_SUCCEEDED', payload:action.payload });
    } catch(error) {
      yield put({ type: 'BIOGRAPHY_PUT_FAILED', error });
    }
  }
}

function* fetchBiography(uid) {
  try {
    yield take("FETCH_BIOGRAPHY");
    let data = yield jsonClient.get('/biography');
    var whatToYield = { type: 'BIOGRAPHY_FETCH_SUCCEEDED', biography:data['body'] };
    yield put(whatToYield);

  } catch(error) {
    yield put({ type: 'BIOGRAPHY_FETCH_FAILED', error });
  }
}

function* putImageURL() {
  while(true) {
    const action = yield take("PUT_IMAGE_URL");
    try {
      yield jsonClient.put('/imageURL', action.newURL);
      yield put({ type: 'IMAGE_URL_PUT_SUCCEEDED', payload:action.payload });
    } catch(error) {
      yield put({ type: 'IMAGE_URL_PUT_FAILED', error });
    }
  }
}

function* fetchImageURL() {
  try {
    yield take("FETCH_IMAGE_URL");
    let data = yield jsonClient.get('/imageURL');
    var whatToYield = { type: 'IMAGE_URL_FETCH_SUCCEEDED', imageURL:data['body'] };
    yield put(whatToYield);

  } catch(error) {
    yield put({ type: 'IMAGE_URL_FETCH_FAILED', error });
  }
}


function* uploadImage(){

  ////////////////////////////////////////
  let _snapshot = function(snapshot){
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    store.dispatch(actions.imageUploadSnapshot(progress));
  };

  ////////////////////////////////////////
  let _error = function(error){
    return {type:'IMAGE_UPLOAD_FAILED', error };
  };

  ////////////////////////////////////////
  let _success = function(){
    const newURL = window.uploadTask.snapshot.downloadURL;
    store.dispatch(actions.imageUploadSucceded(newURL));
    store.dispatch(actions.putImageURL(newURL));
  };

  ////////////////////////////////////////
  while(true) {
    try {
      const action = yield take("UPLOAD_IMAGE");
      var metadata = { contentType: 'image/jpeg' };

      // Upload file and metadata to the object 'images/[filename]'
      let uploadTask = storageRef.child('images/bandImage.jpg').put(action.payload, metadata);

      // Listen for state changes, errors, and completion of the upload.
window.uploadTask = uploadTask; // TODO - better way to pass this object to the success callback
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, _snapshot, _error, _success);
    } catch(error) {
      yield put({ type: 'IMAGE_UPLOAD_FAILED', error });
    }
  }
}

function* fetchTourDates() {
  while(true){
    yield take("FETCH_TOUR_DATES");
    try {
      let data = yield jsonClient.get('/tourDates');
      var whatToYield = { type: 'TOUR_DATE_FETCH_SUCCEEDED', payload:data['body'] };
      yield put(whatToYield);
    } catch(error) {
      yield put({ type: 'TOUR_DATE_FETCH_FAILED', error });
    }
  }
}

function* putTourDates() {
  while(true){
    const action = yield take("PUT_TOUR_DATES");
    console.log("accepted PUT_TOUR_DATES");
    try {
      let data = yield jsonClient.put('/tourDates', action.payload);
      var whatToYield = { type: 'TOUR_DATE_PUT_SUCCEEDED', payload:data['body'] };
      yield put(whatToYield);
    } catch(error) {
      yield put({ type: 'TOUR_DATE_PUT_FAILED', error });
    }
  }
}

export default { putBiography, fetchBiography, uploadImage, putImageURL, fetchImageURL, fetchTourDates, putTourDates };