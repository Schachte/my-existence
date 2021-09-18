import React from 'react'
import styled from 'styled-components'
import Post from './Post';
import '../styles/Search.css'
import { graphql, useStaticQuery } from 'gatsby'

const PostsContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 40px;
    flex-direction: column;
`

const intersect = (post, selected) => {
    post = post.map(item => item.toLowerCase())
    selected = selected.map(item => item.toLowerCase())
    let result = post.filter(function(n) {
        return selected.indexOf(n) > -1;
      });
    
      return result.length == selected.length;
}

const getHighlightedText = (text, highlight) => {
    if (!highlight || !highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    const updatedParts = parts
      .filter((part) => part)
      .map((part, i) =>
        regex.test(part) ? {part} : part
      );

    let newText = "";
    [...updatedParts].map(
      (parts) => {
        return (newText =
          newText +
          (typeof parts === "object"
            ? `<${parts["type"]} class="highlight">${parts.part}</${parts["type"]}>`
            : parts))
        }
    );
    return newText;
  };

export default function Posts({ filter, selectedTags }) {
    let { posts } = useStaticQuery(graphql`
        query AllPosts {
            posts: allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        title
                        tags
                        description
                        date
                    }
                }
            }
        }
    `);

    posts = posts.nodes.map(post => ({...post.frontmatter, id: post.id}))
    const filterInText = (filter, body) => body.toLowerCase().includes(filter.toLowerCase())
    return (
        <PostsContainer>
            {posts
                .filter(post => selectedTags.length == 0 || intersect(post.tags, selectedTags))
                .filter(post => filter === undefined 
                    || filterInText(filter, post.title) 
                    || filterInText(filter, post.description))
                .map(post =>  
                    <Post 
                        date={post.date} 
                        title={{styledTitle: getHighlightedText(post.title, filter), raw: post.title}} 
                        description={getHighlightedText(post.description, filter)} 
                        tags={post.tags}
                        key={post.id}
                    /> 
                )}
        </PostsContainer>
    )
}
