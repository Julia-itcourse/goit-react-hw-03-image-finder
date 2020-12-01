import React from "react"
import ImageGalleryItem from '../ImageGalleryItem'
import PropTypes from "prop-types"

const ImageGallery = ({hits, onImageClick}) => {
  return (
    (
      <ul className="ImageGallery">
        {hits.map((item) => (
          <ImageGalleryItem key={item.id} 
          onClick = {onImageClick}
          cardImage = {item.webformatURL}
          alt = {item.tags}
          srcOriginal={item.largeImageURL}
          getLargeImageURL={onImageClick}
          />
          
        ))}
      </ul>
    )
   
  )
}

ImageGallery.propTypes = {
hits: PropTypes.array.isRequired,
onImageClick: PropTypes.func.isRequired
}


export default ImageGallery
