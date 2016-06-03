import React from 'react';
import MessageFormContainer from './MessageFormContainer';
import MessageListContainer from './MessageListContainer';

export default class App extends React.Component {
  render() {
    return <div>
        <MessageListContainer store={this.props.store} />
	<MessageFormContainer store={this.props.store} />
      </div>;
  }
};
