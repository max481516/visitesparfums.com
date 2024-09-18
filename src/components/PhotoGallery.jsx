import styled from "styled-components";
import { QUERIES } from "../constants";
import {
  PhotoGalleryImage1,
  PhotoGalleryImage2,
  PhotoGalleryImage3,
  PhotoGalleryImage4,
  PhotoGalleryImage5,
} from "../media/PhotoGallery/PhotoGalleryImages.js";

export default function PhotoGallery() {
  return (
    <Wrapper>
      <IMG src={PhotoGalleryImage1} loading="lazy" alt="PhotoGalleryImage1" />
      <IMG src={PhotoGalleryImage2} loading="lazy" alt="PhotoGalleryImage2" />
      <IMG src={PhotoGalleryImage3} loading="lazy" alt="PhotoGalleryImage3" />
      <IMG src={PhotoGalleryImage4} loading="lazy" alt="PhotoGalleryImage4" />
      <IMG src={PhotoGalleryImage5} loading="lazy" alt="PhotoGalleryImage5" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  width: 100dvw;
  margin-left: calc(-50vw + 50%);
`;

const IMG = styled.img`
  flex: 1 0 auto;
  min-width: 10%;
  max-width: 30%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  @media ${QUERIES.bigTabletAndUp} {
    width: 20%;
  }
`;
