import messageActionType from './messageActionType';

export function saveMessage(body, author) {
  return {
    type: messageActionType.ADD_MESSAGE,
    payload: {
      author,
      body
    }
  };
};

