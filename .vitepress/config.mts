import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Litojs Documentation",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Fundamentals",
        items: [
          { text: "Litojs", link: "/about-lito" },
          // { text: "Philoshophy", link: "/philosophy" },
          // { text: "Approach", link: "/approach" },
        ],
      },
      {
        text: "Quick Start",
        items: [
          { text: "Lito App", link: "/docs" },
          { text: "Router", link: "/router" },
          { text: "Controller", link: "/docs" },
          { text: "Models", link: "/docs" },
          { text: "Deployment", link: "/docs" },
        ],
      },
      {
        text: "Api References",
        items: [
          { text: "Routers", link: "/docs" },
          { text: "Controllers", link: "/docs" },
          { text: "Models", link: "/docs" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
