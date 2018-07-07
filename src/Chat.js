import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
    };
  }

  getTime = () => {
    let time = '';
    let timePeriod = '';

    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    if (hours > 11) {
      hours = hours % 12;
      timePeriod = 'PM';
    } else {
      timePeriod = 'AM';
    }

    //noon or midnight
    if (hours === 0) {
      hours == 12;
    }
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    time = `${hours} : ${minutes} ${timePeriod}`;
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

      <div className="Chat" style={styles}>
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage} />
      </div>
    );
  }
}

const styles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

};

export default Chat;