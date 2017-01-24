import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import { fetchBiography, fetchImageURL } from './actions';
import sagas from './sagas';


function noop(state){
  return state;
}

/* TODO - better place for this? */
const initialState = {
  "name":"The Bloodhound Gang",
//"image":"https://i.ytimg.com/vi/JZpxaiNV_sM/maxresdefault.jpg",
//"image":"https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/maxresdefault.jpg?alt=media&token=2f7ba16c-f817-4acb-bd8f-069704a7b4a2",
//"image":"http://images4.fanpop.com/image/photos/20000000/Foxtrot-Uniform-Charlie-Kilo-jimmy-pop-20066279-500-270.gif",
//"image":"https://firebasestorage.googleapis.com/v0/b/agent11-api.appspot.com/o/images%2FbandImage.jpg", // ?alt=media&token=840f6579-9cef-42c9-9c64-8632b5ba76df
  "biography":"The Bloodhound Gang is an American rock band which began as a hip hop group but branched out into other genres, including punk rock, alternative hip hop, rapcore, funk metal and electronic rock, as their career progressed.",
  "members":['Jimmy Pop', 'Jared Hasselhoff', 'Q-Ball', 'The Yin', 'Daniel P. Carter' ]
};


export function newStore(){
  const reduxDevTool = (window && window.__REDUX_DEVTOOLS_EXTENSION__) && window.__REDUX_DEVTOOLS_EXTENSION__() || noop;
  const sagaMiddleware = createSagaMiddleware(); // , { logger: console.log });

  const middlewares = compose(applyMiddleware(sagaMiddleware), reduxDevTool);

  const store = createStore(reducer, initialState, middlewares);
  sagaMiddleware.run(sagas.putBiography);
  sagaMiddleware.run(sagas.fetchBiography);
  sagaMiddleware.run(sagas.uploadImage);
  sagaMiddleware.run(sagas.putImageURL);
  sagaMiddleware.run(sagas.fetchImageURL);

  store.dispatch(fetchBiography());
  store.dispatch(fetchImageURL());

  return store;
}

export default newStore();