import React from 'react';

const SearchBar = () => {
  return (
    <form className="p-4 w-60 border-b-2 bg-gray-500">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-gray-200"
        type="text"
	value="author"
        aria-label="Full name"
        placeholder="Search Author"
      />

      {/* finish the form and add the api call  */}
    </form>
  );
};

export default SearchBar;
