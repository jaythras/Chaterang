import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        {
          id: 1,
          user: {
            uid: 234,
            displayName: 'Jayden',
            email: 'test@test.com',
          },
          body: 'testing...1,2,3'
        },
      ]
    };
  }

  addMessage = (body) => {
    const messages = [...this.state.messages];
    const user = this.props.user;
    messages.push({
      id: `${user.uid}-${Date.now()}`,
      user,
      body,
    });
    this.setState({ messages });
  };

  render() {
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage} />
      </div>
    );
  }
}

export default Chat;