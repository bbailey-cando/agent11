import { put, take } from 'redux-saga/effects';

// https://console.firebase.google.com/project/agent11-api/database/data
const FirebaseREST = require('firebase-rest').default;
var jsonClient =
  new FirebaseREST.JSONClient('https://agent11-api.firebaseio.com/'); // , { auth: 'SECRET' });

function* putBiography() {
  while(true) {
    const action = yield take("PUT_BIOGRAPHY");
    // TODO action is undefined, why??
    try {
      let { data } = yield jsonClient.put('/biography', action.payload);
      yield put({ type: 'BIOGRAPHY_PUT_SUCCEEDED', payload:action.payload });
    } catch(error) {
      yield put({ type: 'BIOGRAPHY_PUT_FAILED', error });
    }  
  }
}

function* fetchBiography(uid) {
  try {
    const { action } = yield take("FETCH_BIOGRAPHY");
    let data = yield jsonClient.get('/biography');
    var whatToYield = { type: 'BIOGRAPHY_FETCH_SUCCEEDED', biography:data['body'] };
    yield put(whatToYield);
    
  } catch(error) {
    yield put({ type: 'BIOGRAPHY_FETCH_FAILED', error });
  }
}

export default { putBiography, fetchBiography }; 