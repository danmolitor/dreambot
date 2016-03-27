import { combineReducers } from 'redux';
import messages from './messages';
import searchBox from './SearchBoxReducer';
import averages from './averagesReducer';
import notifications from './notificationsReducer';
import wordCount from './wordCountReducer';
import classify from './questionReducer'
import engagement from './engagement';
import profile from './userProfileReducer';

const rootReducer = combineReducers({
  messages,
  searchBox,
  averages,
  notifications,
  wordCount,
  classify,
  engagement,
  profile
});

export default rootReducer;

