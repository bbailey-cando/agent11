import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import actions from './actions';
import sagas from './sagas';


function noop(state){
  return state;
}

/* TODO - better place for this? */
const initialState = {
  "name":"The Bloodhound Gang",
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

  store.dispatch(actions.fetchBiography());
  store.dispatch(actions.fetchImageURL());

  return store;
}

export default newStore();