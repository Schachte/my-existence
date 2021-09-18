import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import BlogPost from '../components/BlogPost';

export default function Post({ data }) {
    const { title, description, date, tags } = data.markdownRemark.frontmatter
    const { html } = data.markdownRemark

    return (
        <Layout>
            <BlogPost title={title} description={description} date={date} tags={tags} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    )
}
 
export const blogPost = graphql`
query RetrievePost($id: String) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        tags
        description
        date
      }
      html
    }
  }
`