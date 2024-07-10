import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

export default function ReviewsCarousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      autoHeight: true,
      slidesPerView: 1,
      navigation: true,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        1100: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            cursor: pointer;
            color: var(--color-green);
            transition: color 0.6s ease;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: hsl(0, 0%, 20%);
          }

          .swiper-pagination-bullet {
            height: 8px;
            width: 8px;
            cursor: pointer;
            background-color: var(--color-pink);
            transition: background-color 0.6s ease;
          }

          .swiper-pagination-bullet:hover {
            background-color: var(--color-dark-green);
          }

          
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const slideContent = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  const text = {
    fontSize: "1.2rem",
    textAlign: "center",
  };

  const clientName = {
    fontStyle: "italic",
    color: "#555",
  };

  return (
    <>
      <h2>My Reviews:</h2>
      <swiper-container ref={swiperRef} init="false">
        <swiper-slide style={slideContent}>
          <p style={text}>
            My daughter and I enjoyed our perfume walk with Natacha, who lives
            what she teaches, working in the perfume industry in Paris. We liked
            hearing about her own personal experiences on top of learning much
            about the history of perfume in France. We visited several niche
            perfume shops near Place des Vosges, which fit in nicely with our
            quest to find a souvenir scent to bring home. We felt some
            expectation (but no pressure) to make a purchase, but we were not
            yet ready to choose. This was a unique experience and a lovely way
            to spend an afternoon in Paris.
          </p>
          <cite style={clientName}>Tricia</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          There were two participants and we met at a beautiful park where
          Natacha explained the history of perfume, this was very interested.
          Even though I have this hobby for over 10 years I never got into the
          history of perfume. We went to 3 stores in the Marais area and smelled
          some gorgeous en exclusive scents. It was a great time.,
          <p style={text}></p>
          <cite style={clientName}>Lidia</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          original activity in an emblematic area of Paris, Natacha showed us
          perfumeries that we would not have had the idea of visiting and where
          we enjoyed unprecedented scents. I would recommend it, whatever your
          knowledge of perfumes.,
          <p style={text}></p>
          <cite style={clientName}>Nathalie</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            Natacha is extremely knowledgeable about the fragrances, the
            industry and traditions, the history. I am truly impressed. The
            information she provides in the introduction and presentation before
            going to the makers' shops is surprisingly helpful when
            considering/smelling the many wonderful. fragrances. I highly
            recommend this experience.
          </p>
          <cite style={clientName}>Maya</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            The whole experience was wonderful, Natacha is very passionate about
            the industry and you can see the sparkle in her eyes while she was
            introducing us to the history of the perfume industry.
          </p>
          <cite style={clientName}>Nadya</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            Great perfume tour with a lot of interesting facts and stories. Love
            when someone is passionate about what they do! Highly recommend
          </p>
          <cite style={clientName}>Galina</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            I loved this experience! Natacha is truly passionate about the world
            of perfume making. She was super engaged, well organized and fun to
            talk to.
          </p>
          <cite style={clientName}>Asy</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            Natacha is extremely knowledgeable and passionate about perfumes! I
            learned so much from her today. It was a magical experience, and I
            told all my friends at home about it. I highly recommend this
            experience!
          </p>
          <cite style={clientName}>Holly</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            Very interesting the host knew a lot about perfumes. You now know
            what and where niche perfumes are and reasonable priced perfumes.
            There's more about smells and perfumes than I thought. Definitely
            recommendable!
          </p>
          <cite style={clientName}>Sieds</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            Natacha offers an insider&apos;s understanding of the perfume world.
            She gave a thorough history of perfume and then we explored niche
            perfumery shops in the Marais. Wonderful experience!!
          </p>
          <cite style={clientName}>Niki</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            Definitely an informative tour of some of the top perfumeries in
            Paris. Took the information I learned from this the following day
            when I went perfume shopping for my mom. 10/10 would take this class
            again if I was in Paris.
          </p>
          <cite style={clientName}>Rochelle</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            Natacha was a great guide and is very passionate about perfumes. I
            enjoyed learning about perfume history and loved all the scents!
          </p>
          <cite style={clientName}>Carlo</cite>
        </swiper-slide>
        <swiper-slide style={slideContent}>
          <p style={text}>
            Ce fut une excellente expérience et je suis heureux d'avoir trouvé
            la visite de Natacha ! Tout d'abord, vous pouvez toujours y trouver
            BEAUCOUP d'attractions et d'activités touristiques, mais ce n'est
            pas un vrai Paris avec son histoire (qui est bien sûr liée à la
            parfumerie) et son ambiance. Cette visite nous a ouvert les portes
            de boutiques uniques de marques Niche à Paris, nous avons appris des
            nouveautés sur l'histoire des parfums et goûté de nombreux parfums.
            En outre, nous avons trouvé des parfums qui correspondent à notre
            humeur et à notre caractère. Je recommande donc vivement cette
            visite si vous voulez passer votre temps de manière significative et
            avec un grand plaisir.
          </p>
          <cite style={clientName}>Daria</cite>
        </swiper-slide>
      </swiper-container>
    </>
  );
}
