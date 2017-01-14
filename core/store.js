import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import { fetchBiography } from './actions';
import sagas from './sagas';


function noop(state){
  return state;
}

/* TODO - better place for this? */
const initialState = {
  "name":"The Bloodhound Gang",
  "image":"https://i.ytimg.com/vi/JZpxaiNV_sM/maxresdefault.jpg",
//  "image":"http://images4.fanpop.com/image/photos/20000000/Foxtrot-Uniform-Charlie-Kilo-jimmy-pop-20066279-500-270.gif",
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

  store.dispatch(fetchBiography());

  return store;
}

export default newStore();