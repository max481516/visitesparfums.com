import styled from "styled-components";
import { QUERIES, BREAKPOINTS } from "../constants";

export default function PhotoGallery() {
  return (
    <Wrapper>
      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726692185/PhotoGalleryImage1_enrfpo.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726692185/PhotoGalleryImage1_enrfpo.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726692185/PhotoGalleryImage1_enrfpo.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726692185/PhotoGalleryImage1_enrfpo.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <IMG
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726692185/PhotoGalleryImage1_enrfpo.jpg"
            loading="lazy"
            alt="A young woman's hand holding scented paper blotters in front of a historic Parisian door"
          />
        </picture>
      </PictureContainer>

      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726692181/PhotoGalleryImage2_bpllbt.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726692181/PhotoGalleryImage2_bpllbt.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726692181/PhotoGalleryImage2_bpllbt.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726692181/PhotoGalleryImage2_bpllbt.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <IMG
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726692181/PhotoGalleryImage2_bpllbt.jpg"
            loading="lazy"
            alt="A typical outdoor table and chair at a Parisian café"
          />
        </picture>
      </PictureContainer>

      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726692182/PhotoGalleryImage3_o2dotc.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726692182/PhotoGalleryImage3_o2dotc.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726692182/PhotoGalleryImage3_o2dotc.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726692182/PhotoGalleryImage3_o2dotc.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <IMG
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726692182/PhotoGalleryImage3_o2dotc.jpg"
            loading="lazy"
            alt="A large balcony with chessboard tile floors at Musée de la Marine in Paris"
          />
        </picture>
      </PictureContainer>

      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726692183/PhotoGalleryImage4_ubg7bf.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726692183/PhotoGalleryImage4_ubg7bf.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726692183/PhotoGalleryImage4_ubg7bf.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726692183/PhotoGalleryImage4_ubg7bf.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <IMG
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726692183/PhotoGalleryImage4_ubg7bf.jpg"
            loading="lazy"
            alt="A flower on a white background"
          />
        </picture>
      </PictureContainer>

      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1726692179/PhotoGalleryImage5_slbyrq.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1726692179/PhotoGalleryImage5_slbyrq.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1726692179/PhotoGalleryImage5_slbyrq.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1726692179/PhotoGalleryImage5_slbyrq.jpg 550w
            "
            sizes="
              (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
              (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
              (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
              (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
              100vw
            "
            type="image/webp"
          />
          <IMG
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1726692179/PhotoGalleryImage5_slbyrq.jpg"
            loading="lazy"
            alt="A woman spraying perfume on herself"
          />
        </picture>
      </PictureContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;

const PictureContainer = styled.div`
  flex: 1 0 auto;
  min-width: 10%;
  max-width: 30%;
  height: auto;

  @media ${QUERIES.bigTabletAndUp} {
    width: 20%;
  }
`;

const IMG = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
