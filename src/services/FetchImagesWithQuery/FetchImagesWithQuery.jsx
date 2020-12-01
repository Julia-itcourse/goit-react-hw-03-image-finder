import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
//import { Test } from './FetchImagesWithQuery.styles';


const FetchImagesWithQuery = (query, page = 1) => {
  const apiKey = "18426896-fe41a223570e8075df6a95c49";
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};


FetchImagesWithQuery.propTypes = {
  // bla: PropTypes.string,
};

FetchImagesWithQuery.defaultProps = {
  // bla: 'test',
};

export default FetchImagesWithQuery;
