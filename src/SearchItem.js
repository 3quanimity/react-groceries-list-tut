import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchItem = ({ search, setSearch }) => {
  const handleSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <form className="searchForm" onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="search"
        // role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit" aria-label="Add Item">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchItem;
