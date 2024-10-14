import styled from "styled-components";
import { QUERIES, BREAKPOINTS } from "../constants";

export default function PhotoGallery() {
  return (
    <Wrapper>
      {/* First Photo */}
      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_300,f_auto,q_auto/v1726692185/PhotoGalleryImage1_enrfpo.jpg 300w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_600,f_auto,q_auto/v1726692185/PhotoGalleryImage1_enrfpo.jpg 600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900,f_auto,q_auto/v1726692185/PhotoGalleryImage1_enrfpo.jpg 900w
            "
            sizes="
              (max-width: 600px) 100vw,
              (min-width: 601px) and (max-width: 1200px) 50vw,
              30vw
            "
            type="image/webp"
          />
          <IMG
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900/v1726692185/PhotoGalleryImage1_enrfpo.jpg"
            loading="lazy"
            alt="A young woman's hand holding scented paper blotters in front of a historic Parisian door"
          />
        </picture>
      </PictureContainer>

      {/* Second Photo */}
      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_300,f_auto,q_auto/v1726692181/PhotoGalleryImage2_bpllbt.jpg 300w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_600,f_auto,q_auto/v1726692181/PhotoGalleryImage2_bpllbt.jpg 600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900,f_auto,q_auto/v1726692181/PhotoGalleryImage2_bpllbt.jpg 900w
            "
            sizes="
              (max-width: 600px) 100vw,
              (min-width: 601px) and (max-width: 1200px) 50vw,
              30vw
            "
            type="image/webp"
          />
          <IMG
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900/v1726692181/PhotoGalleryImage2_bpllbt.jpg"
            loading="lazy"
            alt="A typical outdoor table and chair at a Parisian café"
          />
        </picture>
      </PictureContainer>

      {/* Third Photo */}
      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_300,f_auto,q_auto/v1726692182/PhotoGalleryImage3_o2dotc.jpg 300w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_600,f_auto,q_auto/v1726692182/PhotoGalleryImage3_o2dotc.jpg 600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900,f_auto,q_auto/v1726692182/PhotoGalleryImage3_o2dotc.jpg 900w
            "
            sizes="
              (max-width: 600px) 100vw,
              (min-width: 601px) and (max-width: 1200px) 50vw,
              30vw
            "
            type="image/webp"
          />
          <IMG
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900/v1726692182/PhotoGalleryImage3_o2dotc.jpg"
            loading="lazy"
            alt="A large balcony with chessboard tile floors at Musée de la Marine in Paris"
          />
        </picture>
      </PictureContainer>

      {/* Fourth Photo */}
      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_300,f_auto,q_auto/v1726692183/PhotoGalleryImage4_ubg7bf.jpg 300w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_600,f_auto,q_auto/v1726692183/PhotoGalleryImage4_ubg7bf.jpg 600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900,f_auto,q_auto/v1726692183/PhotoGalleryImage4_ubg7bf.jpg 900w
            "
            sizes="
              (max-width: 600px) 100vw,
              (min-width: 601px) and (max-width: 1200px) 50vw,
              30vw
            "
            type="image/webp"
          />
          <IMG
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900/v1726692183/PhotoGalleryImage4_ubg7bf.jpg"
            loading="lazy"
            alt="A flower on a white background"
          />
        </picture>
      </PictureContainer>

      {/* Fifth Photo */}
      <PictureContainer>
        <picture>
          <source
            srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_300,f_auto,q_auto/v1726692179/PhotoGalleryImage5_slbyrq.jpg 300w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_600,f_auto,q_auto/v1726692179/PhotoGalleryImage5_slbyrq.jpg 600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900,f_auto,q_auto/v1726692179/PhotoGalleryImage5_slbyrq.jpg 900w
            "
            sizes="
              (max-width: 600px) 100vw,
              (min-width: 601px) and (max-width: 1200px) 50vw,
              30vw
            "
            type="image/webp"
          />
          <IMG
            width="1600"
            height="900"
            src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_900/v1726692179/PhotoGalleryImage5_slbyrq.jpg"
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
  margin-top: 1rem;
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
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
