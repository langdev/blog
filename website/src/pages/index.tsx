import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

import { Main as OriginalMain } from '~/src/common/styles'

const Main = styled(OriginalMain)`
  padding-top: 150px;
`

type PageProps = {
  location: Location
  data: GatsbyTypes.IndexPageQuery
}
export default function Page(props: PageProps) {
  return (
    <Main>
      <Helmet>
        <title>LangDev Team Blog</title>
        <link rel="canonical" href="https://blog.langdev.org/" />
        <link rel="icon" href="/static/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/static/logo-512.png" type="image/png" />
      </Helmet>
      <h1>LangDev Blog</h1>
      <ul>
        {props.data.allMarkdownRemark.edges.map((edge, index) => {
          const frontmatter = edge.node.frontmatter
          if (!frontmatter) return null
          const { path, title, authors } = frontmatter
          return (
            <li key={path ?? index}>
              <Link to={path!}>
                {title} - {authors}{' '}
              </Link>
            </li>
          )
        })}
      </ul>
    </Main>
  )
}

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
`
