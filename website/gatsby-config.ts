export = {
  pathPrefix: '/blog',
  siteMetadata: {
    siteUrl: 'https://langdev.github.io',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
  ],
};
