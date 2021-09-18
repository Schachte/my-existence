import React from 'react'
import styled from 'styled-components'

const TagStyle = styled.span`
    cursor: pointer;
    border: 1px solid white;
    justify-content: space-between;
    font-family: 'Lora';
    color: ${props => props.selected ? '#1F1F1F' : 'white'};
    background-color: ${props => props.selected ? 'white' : 'transparent'};
    font-size: 15px;
    padding: 10px;
    text-align: center;
    min-width: 30px;
    width: 90px;
    margin-right: 10px;

    &:hover {
        color: var(--accent-1);
        background-color: var(--accent-3);
    }
`

const TagText = styled.span`
    text-transform: capitalize;
`

export default function Tag({ children, selected, onClick }) {
    return (
        <TagStyle onClick={onClick} selected={selected} bgColor={children}>
            <TagText>{ children }</TagText>
        </TagStyle>
    )
}
