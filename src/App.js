import React, { useEffect } from 'react';
import './App.css';

import { useSelector } from 'react-redux';
import { getMovies } from './actions';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getMovies()), [dispatch]);
  const movies = useSelector((state) => state.movies);
  const isloading = useSelector((state) => state.isloading);

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>React Router</h2>
      {isloading && <p>Loading</p>}
      {movies.map((movie) => {
        return (
          <div key={movie.name}>
            <h3>{movie.name}</h3>
            <h4>{movie.director}</h4>
            <p>
              <img
                src={movie.imageUrl}
                alt={movie.name}
                style={{ width: '100px' }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}
