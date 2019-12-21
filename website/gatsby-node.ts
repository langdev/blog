import path from 'path';
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const component = path.resolve('src/templates/post.tsx');
    const { data } = await graphql(gatsbyNodeEveryPostsQuery);
    const posts = (data as GatsbyNodeEveryPostsData).allMarkdownRemark.edges;
    for (const post of posts) {
        const path = post.node.frontmatter.path;
        createPage({ path, component, context: {} });
    }
};

const gql = String.raw;
const gatsbyNodeEveryPostsQuery = gql`
    query GatsbyNodeEveryPosts {
        allMarkdownRemark(sort: { fields: frontmatter___path }) {
            edges {
                node {
                    frontmatter {
                        path
                    }
                }
            }
        }
    }
`;
interface GatsbyNodeEveryPostsData {
    allMarkdownRemark: {
        edges: {
            node: {
                frontmatter: {
                    path: string;
                };
            };
        }[];
    };
}
