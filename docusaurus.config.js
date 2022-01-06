const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Lodge',
  tagline: 'Open source self-managed logging observability framework',
  url: 'https://lodge-logging.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Lodge_Favicon.ico',
  organizationName: 'lodge-logging', // Usually your GitHub org/user name.
  projectName: 'lodge-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Lodge',
      logo: {
        alt: 'Lodge Logo',
        src: 'img/Lodge_graphic_color.png',
      },
      items: [],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Lodge Resources',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/lodge-logging/Lodge-CLI' 
            },
            {
              label: 'Case Study',
              href: 'https://lodge-logging.github.io'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lodge`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
