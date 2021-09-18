import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const TagsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 25px;
`

const toggleSelectedTag = (selectedTags, tagName, setSelectedTags) => {
    if (selectedTags.includes(tagName)) {
        setSelectedTags(selectedTags.filter(tag => tag != tagName))
        return
    }
    setSelectedTags([...selectedTags, tagName])
}

export default function Tags({ children, selectedTags, setSelectedTags, tags=[], clickEvent=toggleSelectedTag }) {
    return (
        <>
            <TagsContainer>
                {tags.map(tag => <Tag onClick={() => clickEvent(selectedTags, tag, setSelectedTags)} selected={selectedTags.includes(tag)}>{tag}</Tag>)}
            </TagsContainer>
            {children}
        </>
    )
}
