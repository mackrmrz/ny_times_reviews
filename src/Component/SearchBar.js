import values from 'postcss-modules-values';
import React, { useState } from 'react';

const SearchBar = (props) => {
  // remove this state and send the callback func to parent component
  return (
    <form
      className="p-4 w-60 border-b-2 bg-gray-500 flex"
      onSubmit={props.searchBarQuery}
    >
      <label>Find By Author</label>
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-gray-200"
        type="text"
        name="author"
        value={values.author}
        placeholder="Search Author"
        onChange={props.handleChange}
      />
      <button>Search</button>
    </form>
  );
};

// looking to move the form to parent component

export default SearchBar;
