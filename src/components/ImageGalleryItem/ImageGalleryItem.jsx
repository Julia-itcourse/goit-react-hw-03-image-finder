import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ImageGalleryItem.styles';

const ImageGalleryItem=({cardImage, alt, onClick})=>{
  return (<li className="ImageGalleryItem">
  <img src={cardImage} alt={alt} className="ImageGalleryItem-image" onClick ={onClick}/>
</li>)
}

ImageGalleryItem.propTypes = {
  // bla: PropTypes.string,
};

ImageGalleryItem.defaultProps = {
  // bla: 'test',
};

export default ImageGalleryItem;
