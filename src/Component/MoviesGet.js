import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Flick from './flick';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieMeta, setMovieMeta] = useState([]);
  //   console.log('Setting the State', movies);
  //   console.log('METADATA STATE', movieMeta);

  const fetchMovies = async () => {
    await axios
      .get('')
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
