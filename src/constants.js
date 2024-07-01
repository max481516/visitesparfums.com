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

const FONT_STYLES = {
  primaryTitles: {
    size: "calc(32rem / 16)",
    weight: 1000,
  },
  secondaryTitles: {
    size: "calc(24rem / 16)",
    weight: 800,
  },
  texts: {
    size: "calc(14rem / 16)",
    weight: 400,
  },
};

export { BREAKPOINTS, QUERIES, FONT_STYLES };
