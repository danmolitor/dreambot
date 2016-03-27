import {combineReducers} from 'redux';

import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES} from '../actions';




function classify(state = {isFetching: false, classifications: []}, action){
  switch(action.type){
    case REQUEST_CATEGORIES:
      //return Object.assign({}, state, {isFetching: true});
      return {...state, isFetching: true}
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {isFetching: false, classifications: action.categories});
    default:
      return state;
  }
}

const classificationsReducer = combineReducers({
  classify
});

export default classificationsReducer;