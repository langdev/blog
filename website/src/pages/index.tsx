import React from 'react';
import { graphql, Link } from 'gatsby';

import { IndexPageQuery } from '~/types/gatsby-graphql-types';

interface PageProps {
    location: Location;
    data: IndexPageQuery;
}
const Page: React.FC<PageProps> = ({ data }) => {
    return (
        <>
            <h1>LangDev Blog</h1>
            <ul>
                {data.allMarkdownRemark.edges.map((edge, index) => {
                    const frontmatter = edge.node.frontmatter;
                    if (!frontmatter) return null;
                    const { path, title, authors } = frontmatter;
                    return (
                        <li key={path ?? index}>
                            <Link to={path!}>
                                {title} - {authors}{' '}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
export default Page;

export const pageQuery = graphql`
    query IndexPage {
        allMarkdownRemark(sort: { fields: frontmatter___date }) {
            edges {
                node {
                    frontmatter {
                        path
                        date
                        title
                        authors
                    }
                }
            }
        }
    }
`;
