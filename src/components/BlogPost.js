import React from 'react'
import styled from 'styled-components';
import '../styles/Blog.css'
import Tags from './Tags';
import { navigate } from 'gatsby';

import { Link as GatsbyLink } from "gatsby";
import { PageQueryStore } from '../../.cache/query-result-store';

const StyledLink = styled(GatsbyLink)`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    width: 100%;
    align-items: center;
    color: var(--accent-3);

    &:visited {
        text-decoration: none;
    }
`;

const PostHeading = styled.div`
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const PostHeadSubStyle = styled.span`
    margin-top: 10px;
    align-items: center;
    font-family: 'Source Sans Pro';
    font-weight: 100;
    font-size: 2.5rem;
    color: var(--accent-2);
`

const PostHeadMain = styled.span`
    letter-spacing: -2px;
    align-items: center;
    color: var(--accent-3);
    font-family: 'Source Sans Pro';
    font-weight: 700;
    font-size: 5.125rem;
    text-transform: capitalize;
`

const PostHeadAuthor = styled.span`
    align-items: center;
    font-family: 'Source Sans Pro';
    font-weight: 600;
    font-size: 2.25rem;
    margin-top: 20px;
    color: var(--accent-3);
`

const AuthorSpan = styled.span`
    color: var(--accent-3);
    display: inline-block;
    text-decoration: none;
    border-bottom: 5px solid #F2F2A7;
    margin-top: 20px;
`

const TagManager = styled.div`
    display: flex;
    justify-content: center;
    width: 45%;
`

export default function BlogPost({ title, description, date, tags}) {
    return (
        <PostHeading>
            <PostHeadMain>{title}</PostHeadMain>
            <PostHeadSubStyle>{description}</PostHeadSubStyle>
            <TagManager>
                <Tags selectedTags={[]} tags={tags} clickEvent={(nil1, tag, nil2) => navigate(`/search/tag/${tag.replaceAll(' ', '-').toLowerCase()}`)}/>
            </TagManager>
            <PostHeadAuthor>Written By <AuthorSpan><StyledLink to={'https://Twitter.com/TheSimpEngineer'}>Ryan Schachte</StyledLink></AuthorSpan> on {date}</PostHeadAuthor>
        </PostHeading>

    )
}
