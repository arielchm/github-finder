import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };

  // onChange = e => {
  //   this.setState({ text: e.target.value });
  // };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    // to prevent submitting to a file
    e.preventDefault();
    console.log(this.state.text);
  };
  render() {
    // If arrow functions are not used 'this' must be passed
    // <form onSubmit={this.onSubmit.bind(this)}
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
      </div>
    );
  }
}

export default Search;
