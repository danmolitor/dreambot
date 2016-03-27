import React from 'react';
import { connect } from 'react-redux';
import Messages from '../components/Messages';
import { filterMessages } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterUserMessages(username){
      dispatch(filterMessages(username))
    }
  }
}

// const GetMessages = connect(mapStateToProps)(Messages);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);