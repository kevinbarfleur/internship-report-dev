import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Navbar from '../components/Navbar'

// Styles
import './main.css'
import './index.styl'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const titles = []
    posts.map(({ node }) => {
      titles.push(node.frontmatter.title)
    })

    return (
      <div className="app">
        {/* <Navbar titles={titles} /> */}
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }, key) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div className="article_card" key={node.fields.slug}>
              <Link to={node.fields.slug}>
                <h3 className="article_card_title">{title}</h3>
                <p className="article_card_date">{node.frontmatter.date}</p>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
