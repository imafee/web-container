import { defineConfig } from "vitepress";
import pkg from "../package.json";
import sidebar from "./sidebar.js";
let { name, description, homepage, bugs, license, author, config } = pkg;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: name,
  description,
  base: "/web-container/",
  srcDir: "./docs",
  assetsDir: "static",
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "./assets/favicon-16x16.png",
      },
    ],
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    // sidebar,
    socialLinks: [{ icon: "github", link: config["repo-url"] }],
    footer: {
      message: `Released under the ${license} License.`,
      copyright: `Copyright © 2020-${new Date().getFullYear()}-${author.name}`,
    },
    editLink: {
      pattern: `${config["repo-url"]}/edit/main/:path`,
      text: `Edit this page on ${config["repo-url"]}`,
    },
    lastUpdated: false,
    search: {
      provider: "local",
    },
  },
});
