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
          loc: "/about",
          lastmod: new Date().toISOString(),
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
      readable: true, // To make debugging easier with a readable format
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
