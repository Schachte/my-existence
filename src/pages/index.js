import React, { useState } from 'react'
import Layout from '../components/Layout';
import Tags from '../components/Tags';
import Posts from '../components/Posts';
import Search from '../components/Search';
import { graphql, useStaticQuery } from 'gatsby'

export default function HomePage() {
  const [searchValue, setSearchValue] = useState()
  const [selectedTags, setSelectedTags] = useState([])

  const data = useStaticQuery(graphql`
  query Taggregator {
    allMarkdownRemark {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`)

  const tags = [...new Set(data.allMarkdownRemark.nodes.map(node => node.frontmatter.tags).flatMap(item => item))]

  return (
    <Layout>
      <Tags setSelectedTags={setSelectedTags} selectedTags={selectedTags} tags={tags}>
        <Search onChange={setSearchValue} />
      </Tags>
      <Posts filter={searchValue} selectedTags={selectedTags} /> 
    </Layout>
  )
}