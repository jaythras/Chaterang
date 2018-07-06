import React from 'react';

import Avatar from './Avatar';

const Message = ({ message }) => {
  return (

    <div className="Message" style={styles.message}>
      <Avatar user={message.user} />

      <div className="details" style={styles.details}>
        <div className="Metadata" style={styles.metadata}>
          <div className="user" style={styles.user}>
            {message.user.displayName}
          </div>
          <div className="time" style={styles.time}>
            {message.time}
          </div>
        </div>
        <div className="body">
          {message.body}
        </div>
      </div>
    </div>

  );
};

const styles = {
  message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },

  details: {
    flex: 1,
    paddingLeft: '0.5rem',
  },

  avatar: {
    background: 'url(https://api.adorable.io/avatars/32/davey@getfretless.com)'
  },
  metadata: {
    display: 'flex',
    alignItems: 'baseline',
  },

  user: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  time: {
    color: '#999',
    fontSize: '0.8rem',
  },


}

export default Message;