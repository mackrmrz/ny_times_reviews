import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flick from './flick';
require('dotenv').config();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieMeta, setMovieMeta] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  //   console.log('Setting the State', movies);
  //   console.log('METADATA STATE', movieMeta);

  const fetchMovies = async () => {
    await axios
      .get(
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${api_key}`
      )
      .then((res) => {
        return setMovies([...res.data.results]), setMovieMeta([res.data]);
      })
      .catch((error) => console.log('ERROR:', error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((review, index) => {
        return <Flick reviews={review} key={index} />;
      })}
    </div>
  );
};

export default Movies;
