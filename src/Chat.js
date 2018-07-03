import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        { id: 1, userName: 'Jayden', body: 'testing...1,2,3' },
        { id: 2, userName: 'otherUser', body: 'here is another test' },
      ]
    }
  }
  render() {
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm />
      </div>
    );
  }
}

export default Chat;