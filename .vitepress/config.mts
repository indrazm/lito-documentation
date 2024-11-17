import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Litojs Documentation",
  description: "A pragmatic fullstack javascript framework",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Fundamentals",
        items: [
          { text: "Litojs", link: "/fundamentals/about-lito" },
          { text: "HTMX", link: "/fundamentals/htmx" },
          { text: "Alpinejs", link: "/fundamentals/alpinejs" },
          { text: "Roadmap", link: "/fundamentals/roadmap" },
        ],
      },
      {
        text: "Quick Start",
        items: [
          { text: "Create app", link: "/quickstart/create-app" },
          { text: "Router", link: "/quickstart/router" },
          { text: "Controller", link: "/quickstart/controller" },
          { text: "Views", link: "/quickstart/views" },
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

    socialLinks: [{ icon: "github", link: "https://github.com/indrazm" }],
  },
});
