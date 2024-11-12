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
        items: [{ text: "Litojs", link: "/fundamentals/about-lito" }],
      },
      {
        text: "Quick Start",
        items: [
          { text: "Create app", link: "/quickstart/create-app" },
          { text: "Router", link: "/quickstart/router" },
          { text: "Controller", link: "/quickstart/controller" },
          { text: "Models", link: "/quickstart/models" },
          { text: "Deployment", link: "/quickstart/deployment" },
        ],
      },
      {
        text: "Api References",
        items: [
          { text: "Routers", link: "/api-references/router" },
          { text: "Context", link: "/api-references/context" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
