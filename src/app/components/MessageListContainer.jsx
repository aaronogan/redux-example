import React from 'react';
import MessageList from './MessageList';

export default class MessageListContainer extends React.Component {
  render() {
    let appState = this.props.store.getState();
    let messages = appState.messages;
    return <MessageList messages={messages} />;
  }
};
