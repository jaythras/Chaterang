import React, { Component } from 'react';

import Sidebar from './Sidebar';
import Chat from './Chat';

class Main extends Component {
  state = {
    room: {
      name: 'general',
      description: 'General Chat',
    },
    rooms: {
      general: {
        name: 'general',
        description: 'General Chat',
      },
      random: {
        name: 'random',
        description: 'Chat for random information',
      },
      codeProbs: {
        name: 'codeProbs',
        description: 'Share code and ask questions',
      }
    },
  };

  setCurrentRoom = roomName => {
    const room = this.state.rooms[roomName];
    this.setState({ room });
  };

  render() {
    return (
      <div className='Main' style={styles}>
        <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
          rooms={this.state.rooms}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
        />
      </div>
    );
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
};

export default Main;

