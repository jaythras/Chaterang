import React from 'react';

import UserInfo from './UserInfo';

const Sidebar = ({ user }) => {
  return (
    <aside
      className="Sidebar"
      style={styles.sidebar}
    >
      <UserInfo
        user={user}
      />

      <h1 style={styles.h1}>
        XTBC 18
      </h1>
      <nav className="RoomList" style={styles.children}>
        <h2 styles={styles.RoomListH2}>Rooms</h2>
        <ul style={styles.RoomListUl}>
          <li style={styles.RoomListLi}><a href="#">general</a></li>
          <li style={styles.RoomListLi}><a href="#">random</a></li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    backgroundColor: '#333344',
    color: 'rgba(255, 255, 255, 0.8)',
    width: '12rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  },
  avatar: {
    background: 'url(https://api.adorable.io/avatars/32/davey@getfretless.com)',
    padding: '0 1rem',


  },
  RoomListH2: {
    fontSize: '1rem',
    padding: '0 1rem',

  },

  RoomListUl: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
    padding: '0 1rem',

  },
  RoomListLi: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',
    padding: '0 1rem',

  },
};

export default Sidebar;