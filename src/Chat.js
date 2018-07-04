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
          time: '2 : 30 PM',
          body: 'testing...1,2,3'
        },
      ],
    };
  }

  getTime = () => {
    let time = "";

    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes
    }
    time += hours + " : " + minutes + " ";
    if (hours > 11) {
      time += "PM";
    } else {
      time += "AM";
    }
    return time;
  }

  addMessage = (body) => {
    const messages = [...this.state.messages];
    const user = this.props.user;
    messages.push({
      id: `${user.uid}-${Date.now()}`,
      user,
      time: this.getTime(),
      body,
    });
    this.setState({ messages });
  };

  render() {
    return (



      <main className="Chat" style={styles.chat}>
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