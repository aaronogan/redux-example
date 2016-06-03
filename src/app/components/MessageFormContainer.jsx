import React from 'react';
import MessageForm from './MessageForm';
import { saveMessage } from '../actions/messageActionCreators';

export default class MessageFormContainer extends React.Component {
  render() {
    return <MessageForm submitMessage={this.submitMessage.bind(this)} />
  }

  submitMessage(messageBody, messageAuthor) {
    let saveMessageAction = saveMessage(messageBody, messageAuthor);
    this.props.store.dispatch(saveMessageAction);
  }
};
