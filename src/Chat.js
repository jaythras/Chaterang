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
          time: '2 : 30',
          body: 'testing...1,2,3'
        },
      ],
    };
  }

  addMessage = (body) => {
    const d = new Date();
    const messages = [...this.state.messages];
    const user = this.props.user;
    messages.push({
      id: `${user.uid}-${Date.now()}`,
      user,
      time: `${d.getHours()} : ${d.getMinutes()}`,
      body,
    });
    this.setState({ messages });
  };

  render() {
    return (



      <main className="Chat" style={styles}>
        <ChatHeader />

        <div className="MessageList">

          <div className="roomAnnouncement">
            <h3>#general</h3>
            <p>This is the very beginning of the #general room.</p>
          </div>

          <MessageList messages={this.state.messages} />
          <MessageForm addMessage={this.addMessage} />
        </div>
      </main>
    );
  }
}

const styles = {
  chat: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }

};

export default Chat;