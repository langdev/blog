import React from 'react'
import { graphql, Link } from 'gatsby'

import { IndexPageQuery } from '~/types/gatsby-graphql-types'

type PageProps = {
  location: Location
  data: IndexPageQuery
}
export default function Page(props: PageProps) {
  return (
    <>
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
    </>
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
