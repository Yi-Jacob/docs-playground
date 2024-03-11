const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'DreamFactory Docs',
  tagline: 'Instant API Generation',
  url: 'https://dreamfactory.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dreamfactorysoftware', // Usually your GitHub org/user name.
  projectName: 'df-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', //this isn't working correctly
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dreamfactorysoftware/df-docs',
        },
        blog: {
          showReadingTime: true,
          path: './blog',
          // Please change this to your repo.
          editUrl:
            'https://github.com/dreamfactorysofware/df-docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'DreamFactory',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // {href: 'https://dreamfactory.com', label: 'DreamFactory.com', position: 'right'},
          // {href:'https://blog.dreamfactory.com/', label: 'Blog', position: 'right'},
          // {href:'https://community.dreamfactory.com/', label: 'Community', position: 'right'},
          {
            href: 'https://github.com/dreamfactorysoftware/dreamfactory',
            label: 'GitHub',
            position: 'right',
          },
          {href:'contact', label: 'Contact', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Documentation',
                to: '/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {label: "Github", href: "https://github.com/dreamfactorysoftware/dreamfactory"},
              {
                label: 'Twitter',
                href: 'https://twitter.com/dreamfactory',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/dreamfactorysoftware',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/dreamfactory-software-inc-',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCX0uK4kq8JxOpbPZpXbXN7w',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.dreamfactory.com',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'QGHNECBGGU',
  
        // Public API key: it is safe to commit it
        apiKey: '5063583ea61ed0b8025b3da6e18eecb4',
  
        indexName: '533cef8058b7e446e915ebb7a98d2ef2',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
    
});
