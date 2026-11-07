// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Solín',
  tagline: 'Sóftwer libre nativizado',
  url: 'https://tooclassyforthisworld.github.io',
  baseUrl: '/solin/',
  onBrokenLinks: 'throw',

  // Los archivos .md se interpretan como CommonMark y solo los .mdx como MDX.
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'tooclassyforthisworld', // Usually your GitHub org/user name.
  projectName: 'solin', // Usually your repo name.

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tooclassyforthisworld/solin/tree/trunk/',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tooclassyforthisworld/solin/tree/trunk/',
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
        title: 'Solín',
        logo: {
          alt: 'Logo de Solín',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentos',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/tooclassyforthisworld/solin',
            label: 'Código fuente',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Documentos',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/traductoresSL',
              },
              {
                label: 'Código fuente',
                href: 'https://github.com/tooclassyforthisworld/solin',
              },
            ],
          },
        ],
        copyright: `Dedicado al dominio público. Actualizado en ${new Date().getFullYear()}. Sitio creado con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
