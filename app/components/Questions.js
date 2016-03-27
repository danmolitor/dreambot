import React from 'react';
import ReactRouter from 'react-router';
import MessagesContainer from '../containers/MessagesContainer';
import QuestionsContainer from '../containers/QuestionsContainer'
import NavbarContainer from '../containers/NavbarContainer';
import LeftPanelContainer from '../containers/LeftPanelContainer';
import SearchBoxContainer from '../containers/SearchBoxContainer';

const Questions = React.createClass({
  render: function () {
    return (
      <div className="container is-fluid">
        <NavbarContainer/>
        <h1 className="control">
          <SearchBoxContainer />
        </h1>
        <div className='columns'>
          <div className="column is-2">
            <LeftPanelContainer />
          </div>
          <div className="column is-text-centered">
            <QuestionsContainer />
          </div>
          <div className="column is-quarter">
            <MessagesContainer />
          </div>
          </div>
      </div>
    );
  }
});


export default Questions;