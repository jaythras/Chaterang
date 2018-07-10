import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import base from './base';

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.syncMessages();
  }

  syncMessages = () => {
    //Stop syncing with the current endpoint
    if (this.messagesRef) {
      base.removeBinding(this.messagesRef)
    }

    //Sync woth the new endpoint
    this.messagesRef = base.syncState('messages',
      {
        context: this,
        state: 'messages',
        asArray: true,
      }
    );
  }

  componentDidUpdate(prevProps, _prevState, _snapshot) {
    if (prevProps.room.name !== this.props.room.name)
      this.syncMessages();
  }

  componentWillUnmount() {
    base.removeBinding(this.messagesRef);
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
      hours = 12;
    }
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    time = `${hours} : ${minutes} ${timePeriod}`;
    return time;
  };

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
        <ChatHeader room={this.props.room} />
        <MessageList
          messages={this.state.messages}
          room={this.props.room}
        />
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
