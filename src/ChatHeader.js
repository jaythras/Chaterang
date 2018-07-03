import React, { Component } from 'react';

class ChatHeader extends Component {
  render() {
    return (
      <header className="chatHeader">
        <dive className="roomInfo">
          <h2>#general</h2>
          <p>Announcements and general chat</p>
        </dive>
      </header>
    );
  }
}

export default ChatHeader;