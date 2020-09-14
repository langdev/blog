import React from 'react'
import { graphql, Link } from 'gatsby'

import { main } from '~/src/common/styles'
import { PostPageQuery } from '~/types/gatsby-graphql-types'

type PostProps = {
  data: PostPageQuery
}
export default function Post(props: PostProps) {
  const { markdownRemark } = props.data
  const { date, title, authors } = markdownRemark?.frontmatter!
  const __html = markdownRemark?.html!
  return (
    <main className={main}>
      <h1>{title}</h1>
      <time dateTime={date}>{date}</time>
      <div>by {authors}</div>
      <div dangerouslySetInnerHTML={{ __html }} />
      <Link to="/">목록으로 돌아가기</Link>
    </main>
  )
}

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
`
