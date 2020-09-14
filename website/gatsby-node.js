const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const component = path.resolve('src/templates/post.tsx')
  const { data } = await graphql(gatsbyNodeEveryPostsQuery)
  const posts = data.allMarkdownRemark.edges
  for (const post of posts) {
    const path = post.node.frontmatter.path
    createPage({ path, component, context: {} })
  }
}

const gql = String.raw
const gatsbyNodeEveryPostsQuery = gql`
  query GatsbyNodeEveryPosts {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`
