import React from 'react';

import Message from './Message';

const MessageList = () => {
  const messages = [
    { id: 1, userName: 'jayden', body: 'testing...1,2,3' },
    { id: 2, userName: 'otherUser', body: 'here is another test' },
  ]
  return (
    <div className="MessageList">
      {messages.map(msg => (
        <Message message={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default MessageList;