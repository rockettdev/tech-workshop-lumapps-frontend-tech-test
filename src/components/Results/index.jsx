import React from 'react';
import axios from 'axios';

const Results = () => {
  const url = process.env.REACT_APP_MARVEL_API_KEY;
  const name = 'Spi';

  const getCharacter = async () => {
    try {
      await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=${url}`).then((res) => {
        // handle success
        console.log(res);
      });
    } catch (e) {
      console.error(e);
    }
  };


  return (
	<>
		<h1> yo </h1>
		<button type="button" onClick={getCharacter}> TEST </button>
	</>
  );
};

export default Results;
