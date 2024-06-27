import styled from "styled-components";
import {
  PhotoGalleryImage1,
  PhotoGalleryImage2,
  PhotoGalleryImage3,
  PhotoGalleryImage4,
  PhotoGalleryImage5,
  PhotoGalleryImage6,
  PhotoGalleryImage7,
} from "../media/PhotoGallery/PhotoGalleryImages.js";

export default function PhotoGallery() {
  return (
    <Wrapper>
      <IMG src={PhotoGalleryImage1} alt="PhotoGalleryImage1" />
      <IMG src={PhotoGalleryImage2} alt="PhotoGalleryImage2" />
      <IMG src={PhotoGalleryImage3} alt="PhotoGalleryImage3" />
      <IMG src={PhotoGalleryImage4} alt="PhotoGalleryImage4" />
      <IMG src={PhotoGalleryImage5} alt="PhotoGalleryImage5" />
      <IMG src={PhotoGalleryImage6} alt="PhotoGalleryImage6" />
      <IMG src={PhotoGalleryImage7} alt="PhotoGalleryImage7" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

const IMG = styled.img`
  object-fit: cover;
  width: 132px;
  height: 132px;
  flex-shrink: 0;
`;
