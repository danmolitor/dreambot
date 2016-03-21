// TODO: convert state to an object to enhance description of state
// ie. isFetching and time stamp of messages received.
const initialState = {
  messages: [],
  rawMessages: [],
  filter: 'SHOW_ALL',
};

const addUniqueMessages = (oldMessages, newMessages) => {
  let ids = oldMessages.map(message => message.id);
  return newMessages.filter(message => !ids.some(id => id === message.id))
};

const sortMessages = (array) => {
  return array.sort((a, b) => {
    return new Date(b.ts) - new Date(a.ts)
  });
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, 
        { 
          messages: [...state.messages, action.message],
          rawMessages: [...state.rawMessages, action.message]
        });
    case 'RECEIVE_MESSAGES':
      return Object.assign({}, state,
        {
          messages: sortMessages(action.messages),
          rawMessages: sortMessages(state.rawMessages.concat(addUniqueMessages(state.rawMessages, action.messages)))
        });
    case 'FILTER_MESSAGES':
      return Object.assign({}, state, 
        {
          filter: 'SHOW_USER',
          username: action.username,
          messages: sortMessages(state.rawMessages.filter(message => message.name === action.username))
        });
    case 'SHOW_ALL':
      return Object.assign({}, state,
        { 
          messages: sortMessages(state.rawMessages) 
        });
    case 'REQUEST_MESSAGES':
    default:
      return state;
  }
}
