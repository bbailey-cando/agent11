import { put, take, apply, call } from 'redux-saga/effects';
import store from './store';
var firebase = require('firebase');

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
    // TODO action is undefined, why??
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

/*console.log(error.code);
  switch (error.code) {
    case 'storage/unauthorized': // User doesn't have permission to access the object
      break;
    case 'storage/canceled': // User canceled the upload
      break;
    case 'storage/unknown': // Unknown error occurred, inspect error.serverResponse
      break;
  } */



function* uploadImage(){

  ////////////////////////////////////////
  let _snapshot = function(snapshot){
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');

    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
      default:
        console.log(snapshot);
        break;
    }
    return { type:'IMAGE_UPLOAD_SNAPSHOT', progress:progress };
  };

  ////////////////////////////////////////
  let _error = function(error){
    return {type:'IMAGE_UPLOAD_FAILED', error };
  };

  ////////////////////////////////////////
  let _success = function(){
    const newUrl = window.uploadTask.snapshot.downloadURL;
    store.dispatch({ type: 'IMAGE_UPLOAD_SUCCEEDED', newImageURL:newUrl });
  };

  ////////////////////////////////////////
  while(true) {
    try {
      const action = yield take("UPLOAD_IMAGE");
      var metadata = { contentType: 'image/jpeg' };

      // Upload file and metadata to the object 'images/[filename]'
      let uploadTask = storageRef.child('images/bandImage.jpg').put(action.payload, metadata);

      // Listen for state changes, errors, and completion of the upload.
      console.log('calling uploadTask.on()');
window.uploadTask = uploadTask; // TODO - better way to pass this object to the success callback
      return uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, _snapshot, _error, _success);
    } catch(error) {
      yield put({ type: 'IMAGE_UPLOAD_FAILED', error });
    }
  }
}

export default { putBiography, fetchBiography, uploadImage };