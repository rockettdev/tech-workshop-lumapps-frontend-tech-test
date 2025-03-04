/* eslint-disable import/no-duplicates */
import { useState } from 'react';
import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import axios from 'axios';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  const url = process.env.REACT_APP_MARVEL_API_KEY;

  const getCharacter = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchInput}&apikey=${url}`).then((res) => {
        const dataArray = [];
        res.data.data.results.forEach((character) => {
          dataArray.push(character);
          setSearchResults(dataArray);
        });
      });
    } catch {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  return (
	<form onSubmit={getCharacter}>
		<input
			value={searchInput}
			theme={Theme.dark}
			placeholder="Search ..."
			icon={mdiMagnify}
			onChange={handleChange}
		/>
	</form>

  );
}


export default Search;
