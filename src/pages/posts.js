import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title="全部文章" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default PostsPage
