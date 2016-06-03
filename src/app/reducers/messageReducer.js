import messageActionType from './../actions/messageActionType';

var initialState = {
  messages: []
};

export default function messageReducer(state = initialState, action) {
  switch(action.type) {
    case messageActionType.ADD_MESSAGE:

      let newState = Object.assign({}, state, {
        messages: [...state.messages, action.payload]
      });

      return newState;
    default:
      return state;
  }
};
