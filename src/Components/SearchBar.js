import React from 'react';

export default function SearchBar(props) {
  return (
    <input
      value={props.searchBar}
      onChange={(e) => props.setSearchBar(e.currentTarget.value)}
    />
  );
}
