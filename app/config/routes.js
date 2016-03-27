import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Questions from '../components/Questions'
import TestContainer from '../containers/TestContainer';
import QuestionsContainer from '../containers/QuestionsContainer';
import AveragesContainer from '../containers/AveragesContainer';
import UserProfileContainer from '../containers/UserProfileContainer';
import LoginContainer from '../containers/LoginContainer';


const Routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path='/user/:id' component={UserProfileContainer} />
    <Route path="/test" component={TestContainer} />
    <Route path='/login' component={LoginContainer} />
    <Route path="/questions" component={Questions} />
    <Route path="/averages" component={AveragesContainer} />
  </Route>
);

export default Routes;
