/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Wormhole Docs",
  url: "https://docs.wormhole.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "wormhole",
  projectName: "docs",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "  ",
        darkIconStyle: {
          marginTop: "1px",
        },
        lightIcon: "  ",
        lightIconStyle: {
          marginTop: "1px",
        },
      },
    },
    navbar: {
      title: "Wormhole",
      logo: {
        alt: "Wormhole",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/darwinia-network",
          className: "github",
          position: "right",
        },
        {
          href: "https://twitter.com/darwinianetwork",
          className: "twitter",
          position: "right",
        },
        {
          href: "https://discord.com/channels/456092011347443723/795384466930663434",
          className: "discord",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    prism: {
      theme: require("./src/wormhole"),
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Wormhole",
              to: "https://darwinia.network",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "docs",
              to: "/introduction/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/darwinia-network",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/darwinianetwork",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wormhole is developed by The Wormhole Project.`,
    },
  },
  plugins: [require.resolve("docusaurus-lunr-search")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/darwinia-network",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

};
