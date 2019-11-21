import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  // onChange = e => {
  //   this.setState({ text: e.target.value });
  // };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    // to prevent submitting to a file
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    // If arrow functions are not used 'this' must be passed
    // <form onSubmit={this.onSubmit.bind(this)}
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
