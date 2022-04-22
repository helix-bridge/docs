/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Helix Docs",
  url: "https://docs.helix.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "helix",
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
      title: "Helix",
      logo: {
        alt: "Helix",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/helix-bridge",
          className: "github",
          position: "right",
        },
        {
          href: "https://twitter.com/helixbridges",
          className: "twitter",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    prism: {
      theme: require("./src/helix"),
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Helix",
              to: "https://helixbridge.app/",
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
              href: "https://github.com/helix-bridge",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/helixbridges",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Helix is developed by The Helix Project.`,
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
          editUrl: "https://github.com/helix-bridge",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

};
