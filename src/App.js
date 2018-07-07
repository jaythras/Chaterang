import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  constructor() {
    super();

    const user = JSON.parse(localStorage.getItem('user'));

    this.state = {
      user: user || {},
    };
  }

  handleAuth = (user) => {
    this.setState({ user });
    localStorage.setItem('user', JSON.stringify(user));
  };

  signedIn = () => {
    return this.state.user.uid;
  };


  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ?
            <Main
              user={this.state.user}

            />
            : <SignIn handleAuth={this.handleAuth} />
        }

      </div>
    );
  }
}

export default App;
