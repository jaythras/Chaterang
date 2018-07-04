import React from 'react';

import Message from './Message';

const MessageList = (props) => {

  return (
    <div className="MessageList" style={styles.MessageList}>
      <div className="roomAnnouncement">
        <h3>#general</h3>
        <p>This is the very beginning of the #general room.</p>
      </div>


      {
        props.messages.map(msg => (
          <Message message={msg} key={msg.id} />
        ))
      }
    </div >
  );
};

const styles = {
  MessageList: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
  }
}

export default MessageList;