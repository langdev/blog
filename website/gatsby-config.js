module.exports = {
  siteMetadata: {
    siteUrl: 'https://blog.langdev.org',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/__generated__/gatsby-types.d.ts',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/../posts`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links',
  ],
}
