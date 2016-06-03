import React from 'react';

export default class MessageList extends React.Component {
  render() {
    let messages = this.props.messages.map(function(message, i) {
      return <li key={i}>
          <span>{message.body}</span> - <span>{message.author}</span>
        </li>;
    });
    return <ul>{messages}</ul>;
  }
};
