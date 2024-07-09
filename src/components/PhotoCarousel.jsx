import React from "react";
import PropTypes from "prop-types";
/* import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; */

class PhotoCarousel extends React.Component {
  render() {
    const {
      images,
      showFullscreenButton,
      showBullets,
      showPlayButton,
      showThumbnails,
      autoPlay,
      slideDuration,
      slideInterval,
    } = this.props;

    return (
      <ImageGallery
        items={images}
        showFullscreenButton={showFullscreenButton}
        showBullets={showBullets}
        showPlayButton={showPlayButton}
        showThumbnails={showThumbnails}
        autoPlay={autoPlay}
        slideDuration={slideDuration}
        slideInterval={slideInterval}
      />
    );
  }
}

// Default props in case some settings are not provided
PhotoCarousel.defaultProps = {
  showFullscreenButton: false,
  showBullets: true,
  showPlayButton: false,
  showThumbnails: false,
  autoPlay: true,
  slideDuration: 700,
  slideInterval: 6000,
};

// Prop validation to ensure correct types are passed
PhotoCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string.isRequired,
    })
  ).isRequired,
  showFullscreenButton: PropTypes.bool,
  showBullets: PropTypes.bool,
  showPlayButton: PropTypes.bool,
  showThumbnails: PropTypes.bool,
  autoPlay: PropTypes.bool,
  slideDuration: PropTypes.number,
  slideInterval: PropTypes.number,
};

export default PhotoCarousel;
