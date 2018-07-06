import React from 'react';

import Avatar from './Avatar';
const UserInfo = ({ user }) => {
  return (
    <div
      className="UserInfo"
      style={styles.userInfo}
    >
      <Avatar user={user} />
      <div className="user" style={styles.user}>
        {user.displayName}
      </div>
    </div>
  );
};

const styles = {
  userInfo: {
    padding: '0 1rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  user: {
    flex: 1,
  }
};

export default UserInfo;
