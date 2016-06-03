import React from 'react';

export default class MessageForm extends React.Component {
  render() {
    return <div>
        <label htmlFor="message-body">
	  Message
          <input type="text" name="message-body" ref="message-body"></input>
	</label>
	<label htmlFor="author">
	  Author
	  <input type="author" name="message-author" ref="message-author"></input>
	</label>
	<button type="submit"
            onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </div>;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitMessage(this.refs['message-body'].value, this.refs['message-author'].value);
  }
};
