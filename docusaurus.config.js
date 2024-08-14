const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "DAuth Docs",
  tagline: "대구소프트웨어 고등학교 OAuth Docs",
  url: "https://dauth.b1nd.com/",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Team-B1ND",
  projectName: "DAuth_Docs",
  themeConfig: {
    prism: {
      additionalLanguages: ["kotlin", "kt", "kts"],
    },
    navbar: {
      title: "DAuth",
      logo: {
        alt: "DAuth Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "OAuth2.0",
          position: "left",
          label: "OAuth",
        },
        {
          type: "doc",
          docId: "UseDAuthWEB",
          position: "left",
          label: "이용방법",
        },
        {
          type: "doc",
          docId: "Token API",
          position: "left",
          label: "API Docs",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Service",
          items: [
            {
              label: "DAuth",
              href: "https://dauth.b1nd.com",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "School HomePage",
              href: "https://www.dgsw.hs.kr/index.do",
            },
            {
              label: "DodamDodam",
              href: "https://dodam.b1nd.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Team B1ND",
              href: "httpss://b1nd.com/",
            },
            {
              label: "GitHub",
              href: "https://Team-B1ND",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Team B1ND, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
