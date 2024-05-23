import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showBullets={true}
        showPlayButton={false}
        showThumbnails={false}
        autoPlay={true}
        slideDuration={700}
        slideInterval={6000}
      />
    );
  }
}

export default Carousel;
