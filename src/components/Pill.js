import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby';

const PillStyle = styled.span`
    max-width: 100px;
    border-radius: 20px;
    background-color: ${ props => props.color ? props.color : "white" }; 
    font-family: 'Lora';
    font-size: 1.5rem;
    padding: 3px 10px 3px 10px;
    text-transform: capitalize;
    &:not(:first-child) { 
        margin-left: 10px;
    }
    cursor: pointer;

    &:hover {
        opacity: .8;
    }
`

export default function Pill({color, children}) {
    return (
        <PillStyle color={color} onClick={() => navigate(`/search/tag/${children.toLowerCase().replaceAll(' ', '-')}`)}>
            {children}
        </PillStyle>
    )
}
