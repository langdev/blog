import React from 'react';
import { graphql, Link } from 'gatsby';

import { PostPageQuery } from '~/types/gatsby-graphql-types';

interface PostProps {
    data: PostPageQuery;
}
const Post: React.FC<PostProps> = ({ data }) => {
    const { markdownRemark } = data;
    const { date, title, authors } = markdownRemark?.frontmatter!;
    const __html = markdownRemark?.html!;
    return (
        <>
            <h1>{title}</h1>
            <time dateTime={date}>{date}</time>
            <div>by {authors}</div>
            <div dangerouslySetInnerHTML={{ __html }} />
            <Link to="/">목록으로 돌아가기</Link>
        </>
    );
};

export default Post;

export const pageQuery = graphql`
    query PostPage($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date
                title
                authors
            }
        }
    }
`;
