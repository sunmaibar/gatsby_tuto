import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {
    pageContext: { category },
  } = props

  const {
    data: {
      categories: { nodes: posts },
    },
  } = props
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`文章相關分類 / ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        id
        frontmatter {
          author
          date(formatString: "MMMM Do,YYYY")
          title
          category
          readTime
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default CategoryTemplate
