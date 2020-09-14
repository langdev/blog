import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { css } from 'emotion'
import 'github-markdown-css'

import { main } from '~/src/common/styles'
import { PostPageQuery } from '~/types/gatsby-graphql-types'

const info = css`
  margin-bottom: 2em;
  text-align: right;
`

const backToList = css`
  margin-top: 2em;
  text-align: right;
`

type PostProps = {
  data: PostPageQuery
}
export default function Post(props: PostProps) {
  const { markdownRemark } = props.data
  const { date, title, authors } = markdownRemark?.frontmatter!
  const __html = markdownRemark?.html!
  return (
    <main className={main}>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" href="/static/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/static/logo-512.png" type="image/png" />
      </Helmet>
      <h1>{title}</h1>
      <p className={info}>
        <time dateTime={date}>{date}</time>, by <b>{authors}</b>
      </p>
      <article className="markdown-body" dangerouslySetInnerHTML={{ __html }} />
      <div className={backToList}>
        <Link to="/">목록으로 돌아가기</Link>
      </div>
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
