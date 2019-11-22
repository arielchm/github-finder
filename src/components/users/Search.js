import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Destructuring props as a parameter
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState(' ');
  // instead of state = {text: ''};

  // onChange = e => {
  //   this.setState({ text: e.target.value });
  // };

  //const onChange = e => this.setState({ [e.target.name]: e.target.value });
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    // to prevent submitting to a file
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
