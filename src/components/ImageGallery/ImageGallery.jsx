import React from "react"
import ImageGalleryItem from '../ImageGalleryItem'
import PropTypes from "prop-types"
//import { Test } from './ImageGallery.styles';

//inside li with images
const ImageGallery = ({hits, onImageClick}) => {
  return (
    (
      <ul className="ImageGallery">
        {hits.map((item) => (
          <ImageGalleryItem key={item.id} 
          onClick = {onImageClick}
          cardImage = {item.webformatURL}
          alt = {item.tags}/>
        ))}
      </ul>
    )
   
  )
}

ImageGallery.propTypes = {
  // bla: PropTypes.string,
}

ImageGallery.defaultProps = {
  // bla: 'test',
}

export default ImageGallery
