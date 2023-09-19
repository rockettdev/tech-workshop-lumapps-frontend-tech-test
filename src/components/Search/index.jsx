/* eslint-disable import/no-duplicates */
import { useState } from 'react';
import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

function Search() {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  return (
	<input
		value={searchInput}
		theme={Theme.dark}
		placeholder="Search ..."
		icon={mdiMagnify}
		onChange={handleChange}
	/>
  );
}


export default Search;
