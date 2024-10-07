// src/hooks/useFavicon.js
import { useEffect } from "react";

const useFavicon = () => {
  useEffect(() => {
    const darkThemeFavicon32 = "/favicon-dark/favicon-32x32.png";
    const lightThemeFavicon32 = "/favicon-light/favicon-32x32.png";

    const darkThemeFavicon16 = "/favicon-dark/favicon-16x16.png";
    const lightThemeFavicon16 = "/favicon-light/favicon-16x16.png";

    const applyFavicon = (theme) => {
      const existingFavicons = document.querySelectorAll('link[rel="icon"]');
      existingFavicons.forEach((favicon) => favicon.remove());

      const link32 = document.createElement("link");
      link32.rel = "icon";
      link32.type = "image/png";
      link32.sizes = "32x32";
      link32.href =
        theme === "dark"
          ? `${lightThemeFavicon32}?v=${new Date().getTime()}`
          : `${darkThemeFavicon32}?v=${new Date().getTime()}`; // Cache busting

      const link16 = document.createElement("link");
      link16.rel = "icon";
      link16.type = "image/png";
      link16.sizes = "16x16";
      link16.href =
        theme === "dark"
          ? `${lightThemeFavicon16}?v=${new Date().getTime()}`
          : `${darkThemeFavicon16}?v=${new Date().getTime()}`; // Cache busting

      document.head.appendChild(link32);
      document.head.appendChild(link16);
    };

    const setFaviconByTheme = () => {
      const isDarkTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyFavicon(isDarkTheme ? "dark" : "light");
    };

    setFaviconByTheme(); // Set favicon on load

    // Update favicon if the user changes their theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", setFaviconByTheme);

    return () => {
      mediaQuery.removeEventListener("change", setFaviconByTheme);
    };
  }, []);
};

export default useFavicon;
