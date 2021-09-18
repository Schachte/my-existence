import React from 'react'
import styled from 'styled-components'
import Pill from './Pill';
import { hex } from '../utils/Hex'
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled(GatsbyLink)`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    width: 100%;
`;

const PostContainer = styled.div`
    width: 100%;
    display: flex;
    height: auto;
    min-height: 80px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid none;
    animation: fadeIn ease 0.2s;
    border: 1px solid transparent;
    border-left: 8px solid transparent;
    -webkit-animation: fadeIn ease 0.5s;
    -moz-animation: fadeIn ease 0.5s;
    -o-animation: fadeIn ease 0.5s;
    -ms-animation: fadeIn ease 0.5s;

    @keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    @-moz-keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    @-o-keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    @-ms-keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

    &:hover {
        background-color: var(--accent-1); 
        border: 1px solid white;
        border-left: 8px solid #FFD369;
        opacity: .8;
    }
`

const PostDate = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Inconsolata';
    color: var(--accent-3);
    font-size: 1.5rem;
    opacity: .8;
`

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%;
    justify-content: center;
`

const PostTitle = styled.span`
    font-family: 'Inconsolata';
    font-size: 32px;
    color: var(--accent-3);
    display: flex;
`

const PostDescription = styled.span`
    font-family: 'Inconsolata';
    font-size: 18px;
    color: var(--accent-2);
    width: 85%;
`

const PostTags = styled.div`
    display: flex;
    padding-right: 5px;
    align-items: center;
    flex-wrap: wrap;
    width: 25%;
    height: 100%;
`

export default function Post({ date, title, description, tags }) {
    const { styledTitle, raw } = title;
    return (
        <PostContainer>
            <PostDate>
                {date}
            </PostDate>
                <PostContent>
                    <StyledLink to={'/blog/' + raw.replaceAll(' ', '-').toLowerCase()} style={{ textDecoration: 'none' }}>
                        <PostTitle dangerouslySetInnerHTML={{__html: `${styledTitle}`}}/>
                        <PostDescription dangerouslySetInnerHTML={{__html: `${description}`}}/>
                    </StyledLink>
                </PostContent>
            <PostTags>
                {tags.map(tag => <Pill color={hex[tag.toLowerCase().replaceAll(' ', '-')] || 'white'}>{tag}</Pill>)}
            </PostTags>
        </PostContainer>
    )
}
