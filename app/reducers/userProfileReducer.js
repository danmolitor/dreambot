import { REPLACE_PROFILE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case REPLACE_PROFILE:
      return action.data;
    default:
      return state;
  }
}
