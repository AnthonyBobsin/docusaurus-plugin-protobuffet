/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Protobuffet',
  tagline: 'Documentation Toolset for Your Protobuf Workspace',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'protobuffet',
  projectName: 'docusaurus-protobuffet', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Protobuffet',
      logo: {
        alt: 'Protobuffet Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/what/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'protodocs/Booking.proto',
          activeBasePath: 'protodocs',
          label: 'Example Workspace',
          position: 'left',
        },
        {
          href: 'https://github.com/AnthonyBobsin/docusaurus-protobuffet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AnthonyBobsin/docusaurus-protobuffet',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/anthony_bobsin',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Protobuffet. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/AnthonyBobsin/docusaurus-protobuffet/edit/master/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'docusaurus-protobuffet',
      {
        protobuffet: {
          fileDescriptorsPath: './fixtures/proto_workspace.json',
          protoDocsPath: './protodocs',
          sidebarPath: './sidebarsProtodocs.js',
        }
      }
    ]
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: 'protodocs',
        docsDir: 'protodocs',
        indexBlog: false,
      },
    ],
  ]
};
