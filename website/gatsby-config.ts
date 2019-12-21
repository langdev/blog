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
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './',
                aliases: {
                    '~': '.',
                },
            },
        },
        {
            resolve: 'gatsby-plugin-graphql-codegen',
            options: {
                fileName: 'types/gatsby-graphql-types.d.ts',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/../posts`,
            },
        },
        'gatsby-transformer-remark',
    ],
};
