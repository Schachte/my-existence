import React, { useContext, useEffect, useState } from 'react'
import 'normalize.css'
import '../styles/duotone.css'
import styled from 'styled-components'
import { Link as GatsbyLink, Link } from "gatsby";
import { ThemeContext } from "../context/ThemeContext"

import '../styles/GlobalStyles.css';

const StyledLink = styled(GatsbyLink)`
    display: flex;
    text-decoration: none;
    flex-direction: column;
    width: 100%;
    color: var(--accent-3);

    &[type=twitter]:hover {
        color: #1DA1F2;
    }
`;

const MainContainerStyles = styled.div` 
    display: flex;
    width: 100%;
    max-width: 1200px;
    min-width: 500px;
    margin: 0 auto;
    flex-wrap: wrap;
    font-size: 16px;
`

const MainLogoStyles = styled.div` 
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 25px;
    flex-basis: 100%;
    width: 100%;
`

const MainFooterStyles = styled.span`
    display: flex;
    justify-content: center;
    height: auto;
    margin-top: 25px;
    flex-basis: 100%;
    font-family: 'Lora';
    color: var(--accent-3);
    font-size: 1.5rem;
    padding: 20px;
    width: 100%;
`

const Squiggly = styled.span`
    text-decoration: underline wavy ${props => props.color || 'magenta'};
    margin-left: 5px;

    &:hover {
        text-decoration-thickness: 1.5px;
    }
`

const LogoTop = styled.div`
    width: 100%;
`

const LogoBottom = styled.div`
    transform: translateY(-10px);
    width: 100%;
`

const NameSpan = styled.span`
    color: var(--accent-2);
    padding-left: 10px;
`

const LogoH1 = styled.span`
    & {
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-size: 50px;
        font-weight: 500;
        letter-spacing: -3px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent-3);

    }

    &:before,
    &:after {
        content: '';
        border-top: 1px solid white;
        margin: 0 20px 0 0;
        flex: 1 0 20px;
    }

    &:after {
        margin: 0 0 0 20px;
    }
`

const LogoH3 = styled.div`
    text-transform: lowercase;
    font-family: 'Lora';
    font-size: 30px;
    font-weight: 400;
    color: var(--accent-3);
    font-style: italic;
    display: flex;
    width: 100%;

    & > :first-child:hover {
        color: var(--accent-2);
    }
`

const LogoH3Span = styled.button`
    all: unset;
    cursor: pointer;
    display: flex;
    flex-grow: ${props => props.grow || 1};
    justify-content: ${props => props.alignment || 'center'}; 
    font-size: ${props => props.fontSize || 'inherit'};

    &:hover {
        color: var(--accent-2);
    }
`

const NavDivBlock = styled.div`
    display: flex;
    justify-content: right;
    text-align: right;
    width: ${props => props.width || '50%'};
`

const SpanLink = styled.span`
    font-size: 25px;
    width: auto;
    &:not(:last-child) {
        padding-right: 20px;
    }
`

const CopySpan = styled.span`
    display:inline-block;
    transform: rotate(180deg);
  }
`

export default function Layout({ children }) {
    const { pathname } = window.location;
    const { theme, toggle } = useContext(ThemeContext);

    useEffect(()  => {
        document.body.classList.add(theme);
        return () => document.body.classList.remove(theme);
    });

    return (
        <MainContainerStyles>
            <MainLogoStyles>
                <StyledLink to={'/'}>
                    <LogoTop>
                        <LogoH1>ryan <NameSpan>schachte</NameSpan></LogoH1>
                    </LogoTop>
                </StyledLink>
                <LogoBottom>
                    <LogoH3>
                        <NavDivBlock width={'25%'}>
                            {pathname != '/' ? <LogoH3Span fontSize="25px" alignment="left" onClick={() => window.history.back()}>Previous</LogoH3Span> : <LogoH3Span></LogoH3Span>}
                        </NavDivBlock>
                        <NavDivBlock>
                        <StyledLink to={'/'}>
                            <LogoH3Span>engineer, educator, reader, runner</LogoH3Span>
                        </StyledLink>
                        </NavDivBlock>
                        <NavDivBlock width='25%'>
                            <SpanLink>
                                <LogoH3Span onClick={toggle}>Theme</LogoH3Span>
                            </SpanLink>
                            <SpanLink><StyledLink to={'https://Twitter.com/thesimpengineer'} type={"twitter"}>Tweet</StyledLink></SpanLink>
                        </NavDivBlock>
                    </LogoH3>
                </LogoBottom>
            </MainLogoStyles>
            { children }
            <MainFooterStyles>Built &amp; Designed By <Squiggly><StyledLink to={'https://google.com'}>Ryan Schachte</StyledLink></Squiggly>- <CopySpan>&copy;</CopySpan> Copyleft {new Date().getFullYear()} - <Squiggly color="orange"><StyledLink to={'https://google.com'}>Fork Me</StyledLink></Squiggly></MainFooterStyles>
        </MainContainerStyles>
    )
}
