// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Solín',
  tagline: 'Sóftwer libre nativizado',
  url: 'https://tooclassyforthisworld.github.io',
  baseUrl: '/Solin/',
  onBrokenLinks: 'throw',

  // Los archivos .md se interpretan como CommonMark y solo los .mdx como MDX.
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Tipografías de revista: Crimson Pro (cuerpo), Playfair Display
  // (titulares) y JetBrains Mono (código). Se cargan desde Google
  // Fonts con preconnect para reducir el tiempo de carga.
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'true',
      },
    },
  ],
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&display=swap',
      rel: 'stylesheet',
      type: 'text/css',
    },
  ],

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
          // Plugin de remark: envuelve las primeras palabras del primer
          // párrafo de cada artículo en <span class="lead-in"> para que
          // el CSS las renderice en versalitas. Véase
          // src/plugins/remark-lead-in.js.
          remarkPlugins: [
            [require('./src/plugins/remark-lead-in'), {wordCount: 3}],
          ],
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tooclassyforthisworld/solin/tree/trunk/',
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [
            [require('./src/plugins/remark-lead-in'), {wordCount: 3}],
          ],
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
