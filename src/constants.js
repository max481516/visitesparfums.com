const BREAKPOINTS = {
  tabletMin: 550,
  bigTabletMin: 770,
  laptopMin: 1100,
  desktopMin: 1500,
};

const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  bigTabletAndUp: `(min-width: ${BREAKPOINTS.bigTabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

const FONT_SIZES = {
  mobile: "",
  tablet: "16px",
  bigTablet: "18px",
  laptop: "20px",
  desktop: "24px",
};

export { BREAKPOINTS, QUERIES, FONT_SIZES };
