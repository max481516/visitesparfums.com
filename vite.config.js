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
        // Home page
        {
          loc: "/",
          lastmod: new Date().toISOString(),
          changefreq: "daily",
          priority: 1.0,
        },
        // About page
        {
          loc: "/about",
          lastmod: new Date().toISOString(),
          changefreq: "monthly",
          priority: 0.8,
        },
        // Booking page
        {
          loc: "/booking",
          lastmod: new Date().toISOString(),
          changefreq: "monthly",
          priority: 0.8,
        },
      ],

      robotsTxt: true,
      readable: true,
    }),
    react(),
    svgr(),
  ],
});
