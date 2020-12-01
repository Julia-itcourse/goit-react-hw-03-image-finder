import React from "react"
import PropTypes from "prop-types"
//import { Test } from './ImageGalleryItem.styles';

const ImageGalleryItem = ({
  cardImage,
  alt,
  srcOriginal,
  getLargeImageURL
}) => {
 
   const handleClick = event => getLargeImageURL(event.target.dataset.source);
 
  return (
    <li className="ImageGalleryItem">
      <img
        src={cardImage}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={handleClick}
        data-source={srcOriginal}
        
      />
    </li>
  )
 
}

ImageGalleryItem.propTypes = {
  cardImage: PropTypes.string,
  alt: PropTypes.string.isRequired,
  srcOriginal:PropTypes.string.isRequired,
  getLargeImageURL: PropTypes.func.isRequired

}

ImageGalleryItem.defaultProps = {
  // bla: 'test',
}

export default ImageGalleryItem
