import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { navigate } from 'gatsby';

const SearchHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Source Sans Pro';
  font-weight: 700;
  font-size: 50px;
  color: var(--accent-3);
  margin-top: 35px;
`

const SearchResultsStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Lora';
  font-size: 2rem;
  color: var(--accent-3);
  margin-top: 25px;
  font-style: italic;
`

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 500px;
  margin: 0 auto;
  margin-top: 25px;
`

const SearchResult = styled.div`
  width: 100%;
  border: 2px solid white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--accent-2);
    background-color: var(--accent-1);
  }
`

const SearchDate = styled.span`
  color: var(--accent-3);
  font-family: 'Inconsolata';
  font-size: 1.5rem;
`

const SearchTitle = styled.span`
  color: var(--accent-3);
  font-family: 'Lora';
`

const YellowSpan = styled.span`
    color: var(--accent-2);
    padding-left: 1.5rem;
    text-transform: capitalize;
`

const loadPage = (location) => navigate(location)

export default function Search({ data }) {

  const resultantSearchData = [
    ...data.allMarkdownRemark.nodes.map(node => node.frontmatter)
  ]

  const tagName = window.location.pathname
                        .split("/")
                        .splice(-1)[0]

  return (
      <Layout>
        <SearchHeader>Tag Results For <YellowSpan>{tagName}</YellowSpan></SearchHeader>
        <SearchResultsStyle>{resultantSearchData.length} Search Results Found</SearchResultsStyle>
        <ResultContainer>
            {resultantSearchData.map(result => {
              return (
                <SearchResult onClick={() => loadPage('/blog/' + result.title.toLowerCase().replaceAll(' ', '-'))}>
                  <SearchDate>{result.date}</SearchDate>
                  <SearchTitle><i>{result.title}</i></SearchTitle>
                </SearchResult>
              )
            })}
        </ResultContainer>
      </Layout>
  )
}
 
export const pageResults = graphql`
  query SearchResults($tag: String = "") {
    allMarkdownRemark(filter: {frontmatter: {tags: {in: [$tag]}}}) {
      nodes {
        frontmatter {
          title
          date
        }
      }
    }
  }
`

