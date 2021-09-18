import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    color: var(--accent-3);
    border: 1px solid #F7F7F7;
    min-height: 40px;
    margin-top: 30px;
    font-family: 'Lora';
    font-size: 1.5rem;
    align-content: center;
    justify-content: center;
    background: var(--accent-1);
    width: 100%;
    padding-left: 20px;
    opacity: .7;

    &:focus {
        outline: none;
    }
`

export default function Search({ onChange }) {
    return (
        <Input type="text" 
            placeholder="Search..." 
            onChange={(e) => onChange(e.target.value)} />
    )
}
