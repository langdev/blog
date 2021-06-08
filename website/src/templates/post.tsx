import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import 'github-markdown-css'

import * as style from './post.module.css'

type PostProps = {
  data: GatsbyTypes.PostPageQuery
}
export default function Post(props: PostProps) {
  const { markdownRemark } = props.data
  const { date, title, authors } = markdownRemark?.frontmatter!
  const __html = markdownRemark?.html!
  return (
    <main className={style.main}>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" href="/static/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/static/logo-512.png" type="image/png" />
      </Helmet>
      <h1>{title}</h1>
      <p className={style.info}>
        <time dateTime={date}>{date}</time>, by <b>{authors}</b>
      </p>
      <article className="markdown-body" dangerouslySetInnerHTML={{ __html }} />
      <footer className={style.footer}>
        <Link to="/">목록으로 돌아가기</Link>
      </footer>
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
