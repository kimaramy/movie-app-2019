import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id, year, title, summary, poster, rating}) {
  return (
    <div className='movie'>
      <div className='movie__poster'>
        <img src={poster} alt={title} title={title} />
      </div>
      <div className='movie__data'>
        <h1 className='movie__data__title'>
          {title}, <span className='movie__data__year'>{year}</span>
        </h1>
        <span>{rating}</span>
        <p className='movie__data__summary'>{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
