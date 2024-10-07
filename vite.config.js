import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    sitemap({
      hostname: "https://vpparis.fr",
      outDir: "dist",
      extraUrls: [
        {
          loc: "/about", // The relative path of the page
          lastmod: new Date().toISOString(), // Setting last modified time
          changefreq: "monthly",
          priority: 0.8,
        },
        {
          loc: "/booking",
          lastmod: new Date().toISOString(),
          changefreq: "monthly",
          priority: 0.8,
        },
      ],
      readable: true, // For debugging in a more readable format
    }),
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    svgr(),
  ],
  assetsInclude: ["**/*.JPG"],
});
