import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // using axios instead of fetch
  async componentDidMount() {
    this.setState({ loading: true });
    // Environment variables are located in a file at the root of the project called .env.local
    // REACT_APP_GITHUB_CLIENT_ID='9a3f1383c73e33362eb9'
    // REACT_APP_GITHUB_CLIENT_SECRET='a8a395b7da364e07a173c20c64bacd99f5741767'
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
